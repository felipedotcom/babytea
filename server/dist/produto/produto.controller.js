"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("./produto.entity");
const jwt = require("jsonwebtoken");
require('dotenv').config();
let ProdutoController = class ProdutoController {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    findAll(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return jwt.verify(token, process.env.ACCESS_TOKEN_SUPERSECRET, (err, user) => __awaiter(this, void 0, void 0, function* () {
                console.log(user);
                if (err) {
                    throw new common_1.HttpException('deu ruim no token', 401);
                }
                return yield this.produtoRepository.find();
            }));
        });
    }
    create(produtoInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.save(produtoInput);
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Headers('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "create", null);
ProdutoController = __decorate([
    common_1.Controller('produto'),
    __param(0, typeorm_1.InjectRepository(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map