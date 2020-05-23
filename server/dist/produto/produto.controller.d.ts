import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
export declare class ProdutoController {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    findAll(token: any): Promise<Produto[]>;
    create(produtoInput: any): Promise<Produto>;
}
