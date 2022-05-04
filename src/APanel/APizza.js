import React, { useEffect, useState } from "react";
import {
  Table,
  Modal,
  Radio,
  Divider,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Upload,
} from "antd";
import { product } from "../data/Products";
// import ImgCrop from 'antd-img-crop';
import { useDispatch, useSelector } from "react-redux";
import { createData, deleteData } from "../redux/dataSlice";
import { FiEdit } from "react-icons/fi";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const APizza = ({ category }) => {
  const columns = [
    {
      title: "TiTle",
      dataIndex: "title",
    },
    {
      title: "Text",
      dataIndex: "text",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (e) => (
        <a onClick={() => editDatas(e)} style={{ color: "yellow" }}>
          <FiEdit size={30} />
        </a>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [selected, setSelected] = useState([]);
  const [editButton, setEditButton] = useState({});
  const dispatch = useDispatch();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelected([...selectedRows]);
    },
  };
  useEffect(() => {
    if (selected.length === 1) {
      setEditButton(true);
    } else {
      setEditButton(false);
    }
  }, [selected]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImageUrl(newFileList[0].thumbUrl);
  };
  const store = useSelector((state) => state.dataSlice);
  const onPreview = async (file) => {
    console.log("img", src);
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    let urr = fileList[0].thumbUrl;
    dispatch(createData({ values, category, urr, editButton }));
    setIsModalVisible(false);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };
  const deleteDatas = () => {
    dispatch(deleteData(selected));
    console.log(store, selected);
  };
  const editDatas = (e) => {
    setIsModalVisible(true);
    setEditButton(e);
    form.setFieldsValue(e);
    setFileList([{
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: `../${e.img}`,
    },])
    console.log(e.img);
  };
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <Button type="primary" danger onClick={() => deleteDatas()}>
            Delete
          </Button>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Button className="btn2" type="primary" onClick={showModal}>
            Create Product
          </Button>
        </div>
      </div>
      <Modal title="Basic Modal" visible={isModalVisible} footer={<></>}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="text" label="Text" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
          <Form.Item {...tailLayout}>
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
              <Button onClick={handleCancel}>Cancel</Button>

                <Button htmlType="button" className="mx-4" onClick={onReset}>
                  Reset
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <Divider />

      <Table
        rowKey={"id"}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={store.data.filter((item) => item.category === category)}
      />
    </div>
  );
};

export default APizza;
