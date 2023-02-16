import "./App.css";

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [wasmModule, setWasmModule] = useState(null);

  useEffect(() => {
    const fetchWasmModule = async () => {
      const response = await fetch("tflite.wasm");
      const { instance } = await WebAssembly.instantiateStreaming(response);
      setWasmModule(instance.exports);
    };
    fetchWasmModule();
  }, []);

  return <div>{wasmModule && <p>WASM module loaded successfully</p>}</div>;
}

export default MyComponent;
