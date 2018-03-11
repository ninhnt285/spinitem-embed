import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve'
import nodeGlobals from 'rollup-plugin-node-globals';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';
import uglify from 'rollup-plugin-uglify';
import gzip from "rollup-plugin-gzip";
import fs from 'fs'

export default {
    input: 'src/main.js',
    output: {
      file: 'dist/spin-item.js',
      format: 'cjs'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        nodeGlobals(),
        nodeBuiltins(),
        nodeResolve({
            module: true,
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({
          include: 'node_modules/**'
        }),
        vue({
            compileTemplate: true,
            css:true
        }),
        buble(),
        uglify(),
        gzip()
    ]
}
