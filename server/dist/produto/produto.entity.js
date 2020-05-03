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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
var productStatus;
(function (productStatus) {
    productStatus["reservado"] = "reservado";
    productStatus["livre"] = "livre";
    productStatus["ilimitado"] = "ilimitado";
})(productStatus = exports.productStatus || (exports.productStatus = {}));
class Loja {
}
let Produto = class Produto {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Produto.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Produto.prototype, "fotoUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Produto.prototype, "titulo", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Produto.prototype, "quantidade", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Produto.prototype, "valorMin", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Produto.prototype, "valorMax", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, array: true, type: 'simple-json' }),
    __metadata("design:type", Array)
], Produto.prototype, "lojas", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, enum: productStatus }),
    __metadata("design:type", String)
], Produto.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ nullable: false }),
    __metadata("design:type", Date)
], Produto.prototype, "cadastradoEm", void 0);
Produto = __decorate([
    typeorm_1.Entity()
], Produto);
exports.Produto = Produto;
//# sourceMappingURL=produto.entity.js.map