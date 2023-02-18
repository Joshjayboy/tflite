import "./App.css";
import tflite from "./mobilenet_v1_1.0_224_quant.tflite";
import wasm from "./tflite.wasm";
import createTFLiteModel from "./tflite.js";
import createTFLiteSIMDModel from "./tflite-simd.wasm";
// import createTFLiteModel from "./tflite-simd.wasm";

console.log(tflite);


console.log("createTFLiteModel: ", createTFLiteModel);
console.log("createTFLiteSIMDModel: ", createTFLiteSIMDModel);
 console.log(wasm)

const App = () => {
  return;

  console.log(tflite);

  // console.log(tflite - simd.js);
};

export default App;
