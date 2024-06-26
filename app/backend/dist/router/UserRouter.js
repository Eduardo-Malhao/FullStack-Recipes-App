"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const UsersController_1 = __importDefault(require("../controller/UsersController"));
const LoginValidation_1 = __importDefault(require("../middlewares/LoginValidation"));
const RegisterValidation_1 = __importDefault(require("../middlewares/RegisterValidation"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const router = (0, express_1.Router)();
const controller = new UsersController_1.default();
router.post('/register', RegisterValidation_1.default.validateFields, RegisterValidation_1.default.validateEmail, RegisterValidation_1.default.validateUsername, RegisterValidation_1.default.validatePassword, (req, res) => controller.register(req, res));
router.post('/login', LoginValidation_1.default.validateFields, (req, res) => controller.login(req, res));
router.get('/', (req, res) => controller.getAllUsers(req, res));
exports.default = router;
//# sourceMappingURL=UserRouter.js.map