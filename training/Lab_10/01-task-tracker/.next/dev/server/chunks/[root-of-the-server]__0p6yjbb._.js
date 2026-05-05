module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/repos/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-libsql/dist/index-node.mjs [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/prisma/client/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const __TURBOPACK__default__export__ = new PrismaClient({
    adapter: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaLibSql"]({
        url: process.env.DATABASE_URL ?? ""
    }),
    log: [
        "query"
    ]
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/repos/tasks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "add",
    ()=>add,
    "get",
    ()=>get,
    "remove",
    ()=>remove,
    "set",
    ()=>set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repos/prisma.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function get(id) {
    if (id) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].tasks.findUnique({
            where: {
                id
            }
        });
    }
    return await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].task.findMany();
}
async function add(data) {
    if (!data?.title) throw new Error("Title is required");
    return await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].task.create({
        data
    });
}
async function set(id, data) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].task.update({
            where: {
                id
            },
            data
        });
    } catch (e) {
        throw new Error("Task not found");
    }
}
async function remove(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].task.delete({
            where: {
                id
            }
        });
    } catch (e) {
        throw new Error("Task not found");
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/tasks/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repos/tasks.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function GET() {
    try {
        return Response.json(await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get"]());
    } catch (e) {
        console.error(e);
        return Response.json({
            error: "Server error."
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        return Response.json(await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](body), {
            status: 201
        });
    } catch (e) {
        console.error(e);
        if (e.name === "PrismaClientValidationError" || e.code === "P2002") {
            return Response.json({
                error: "Client error."
            }, {
                status: 400
            });
        }
        return Response.json({
            error: "Server error."
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p6yjbb._.js.map