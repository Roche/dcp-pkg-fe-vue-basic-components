<template>
  <div class="dc-content page-editor page-editor--with-bottom-bar">
    <header class="dc-content_header">
      <slot name="pageHeader"></slot>
    </header>

    <div class="page-editor_content">
      <slot></slot>
    </div>

    <v-toolbar class="dc-content_footer page-editor_bottom-bar shadow-xs">
      <div class="ml-auto">
        <slot name="pageFooter"></slot>
      </div>
    </v-toolbar>
  </div>
</template>
