import React, { useCallback, useEffect, useMemo, useState } from "react";
import PageBox from "./Pages";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PageBox />
    </div>
  );
}

export default App;
