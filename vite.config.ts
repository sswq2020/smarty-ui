import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import {presetUno,presetAttributify,presetIcons} from 'unocss'

const rollupOptions = {
  external:['vue','vue-router'],
  output:{
    globals:{
      vue:"Vue"
    }
  }
}

export default defineConfig({
    plugins:[
      vue(),
      vueJsx({}),
      Unocss({
        presets:[
          presetUno(),
          presetAttributify(),
          presetIcons()]
      }) 
    ],
    build:{
      rollupOptions,
      minify:false,
      lib:{
        entry:'./src/entry.ts',
        name:'SSWQUI',
        fileName:'sswq-ui',
        // 导出模块格式
        formats:['es',"umd","iife"]
      }
    }
})