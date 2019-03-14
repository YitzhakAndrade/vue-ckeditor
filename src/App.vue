<template>
  <div id="app">
    <div style="float: right;">
      <a href="https://github.com/YitzhakAndrade/vue-ckeditor" target="_blank">
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
          alt="Fork me on GitHub"
        >
      </a>
    </div>
    <div>
      <section class="s1-U__width--900px s1-U__pd16" style="margin: 0 auto;">
        <div>
          <div class="s1-U__mg--bt32">
            <div class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
              <div>
                <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
                  <span>Vue CKEditor</span>
                </h1>
              </div>
            </div>
          </div>
          <md-card>
            <md-content class="md-scrollbar s1-U__pd0 s1-U__pd16" style="overflow: auto;">
              <h3
                class="md-title s1-U__text-color--primary s1-U__fw--300 s1-U__mg--bt16"
              >Enter your text</h3>

              <ckeditor
                :editor="editor"
                @ready="onReady"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>

              <br>
              <h3>HTML Output:</h3>
              <p
                style="font-family: monospace; min-height: 200px; margin-top: 12px;"
              >{{ editorData }}</p>

              <br>
              <br>
              <br>
              <div v-html="editorData"></div>
            </md-content>
          </md-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

export default {
  name: "App",
  data: () => ({
    editor: DecoupledEditor,
    editorData: `<h2>Titulo</h2><p>&nbsp;</p><p>Textinho</p><blockquote><p>Aqui tem um QUOTE</p></blockquote><h3>SubTitulo</h3><p>Aqui tem um texto corrido, como paragrafo normal mesmo.</p><p>&nbsp;</p><figure class="table"><table><tbody><tr><td>0,0</td><td>0,1</td><td>0,2</td></tr><tr><td>1,0</td><td>1,1</td><td>1,2</td></tr><tr><td>2,0</td><td>2,1</td><td>2,2</td></tr><tr><td>3,0</td><td>3,1</td><td>3,2</td></tr></tbody></table></figure><p>Loren ipsum cabuloso</p><p>&nbsp;</p><p>Minhas listinha:</p><ol><li>item 1</li><li>item 2</li><li>item 3<ol><li>item 3.1</li><li>item 3.2<ol><li>item 3.2.1</li></ol></li><li>item 3.3</li></ol></li><li>item 4</li></ol><p>Lista nao numerada:</p><ul><li>item</li><li>item&nbsp;</li><li>item</li></ul>`,
    editorConfig: {
      removePlugins: ["FontSize", "FontFamily", "Highlight", "Link"],
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "numberedlist",
        "bulletedlist",
        "|",
        "blockquote",
        "inserttable"
      ]
    }
  }),
  methods: {
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    }
  }
};
</script>

