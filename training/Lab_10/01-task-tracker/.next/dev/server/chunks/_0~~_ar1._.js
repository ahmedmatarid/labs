module.exports = [
"[project]/repos/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-libsql/dist/index-node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$client$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/client/client.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const __TURBOPACK__default__export__ = new __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$client$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaClient"]({
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
"[project]/app/api/tasks/[id]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repos/tasks.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function GET(request, { params }) {
    try {
        const { id } = await params;
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get"](id);
        if (!data) return Response.json({
            error: "Task not found"
        }, {
            status: 404
        });
        return Response.json(data);
    } catch (e) {
        return Response.json({
            error: e.message
        }, {
            status: 500
        });
    }
}
async function PATCH(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        return Response.json(await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["set"](id, body));
    } catch (e) {
        return Response.json({
            error: e.message
        }, {
            status: 400
        });
    }
}
async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        return Response.json(await __TURBOPACK__imported__module__$5b$project$5d2f$repos$2f$tasks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["remove"](id));
    } catch (e) {
        return Response.json({
            error: e.message
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_0~~_ar1._.js.map