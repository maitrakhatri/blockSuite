import "./App.css";
import { SimpleAffineEditor } from "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";

const editor = new SimpleAffineEditor();

function App() {
  document.body.appendChild(editor);
  return <div className="App"></div>;
}

export default App;
