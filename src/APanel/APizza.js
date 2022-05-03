import React, { useState } from "react";
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

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

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
    title: "Image",
    dataIndex: "img",
  },
];



const APizza = ({ category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [selected,setSelected] = useState([])
  const dispatch = useDispatch();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelected([...selectedRows])
    },
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImageUrl(newFileList[0].thumbUrl);
  };
 const store = useSelector(state => state.dataSlice)
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
    dispatch(createData({ values, category, urr }));
  };

  const onReset = () => {
    form.resetFields();
  };
const deleteDatas = () => {
  dispatch(deleteData(selected))
  console.log(store,selected);
}
  return (
    <div>
      <Button primary danger onClick={() => deleteDatas()}>Delete</Button>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
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
