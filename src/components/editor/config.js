export const editorConfig = {
   toolbar: [ 
      'fontSize',
      'fontColor',
      '|',
      'bold',
      'italic',
      'underline',
      'alignment',
      'removeFormat',
      '|',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      '|',
      'indent',
      'outdent',
      '|',
      'horizontalLine',
      'imageUpload',
      'insertTable',
      '|',
      'undo',
      'redo',
   ],
   table: {
      contentToolbar: [ 
         'tableColumn',
         'tableRow',
         'mergeTableCells',
         'tableProperties',
      ],
   },
   image: {
      styles: ['alignLeft', 'alignCenter', 'alignRight'],
      toolbar: [ 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight']
   }
}