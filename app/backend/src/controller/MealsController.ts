import { Request, Response } from 'express';
import Service from '../service/MealsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MealsController {
    private service: Service;
    constructor() { this.service = new Service() }

    public async getMeals(req: Request, res: Response) {
        const search = req.query;
        const { status, data } = await this.service.getMeals(search);

        if (status !== 'SUCCESS') return res.status(mapStatusHTTP(status)).json({data});
        return res.status(mapStatusHTTP(status)).json({data});
    }
}
