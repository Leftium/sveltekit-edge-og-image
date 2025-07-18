// src/lib/wasm.ts
// TS will complain, but Vite+Wrangler know how to handle this import
// @ts-expect-error
import wasmModule from '@resvg/resvg-wasm/index_bg.wasm';
export default wasmModule as WebAssembly.Module;