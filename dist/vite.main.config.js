"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
// https://vitejs.dev/config
exports.default = (0, vite_1.defineConfig)({
    build: {
        rollupOptions: {
            external: [
                'sqlite3'
            ]
        }
    }
});
//# sourceMappingURL=vite.main.config.js.map