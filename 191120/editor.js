import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

const saveButton = document.getElementById("saveButton");

const editor = new EditorJS({
  holder: "editorjs",
  tools: {
    header: Header,
    list: List,
    image: SimpleImage
  },
  onReady: () => {
    console.log("ready to work");
  }
});

editor.isReady
  .then(() => {
    console.log("work start?");
  })
  .catch(err => {
    console.log(err);
  });
