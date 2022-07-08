import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map, Observable } from "rxjs";

interface ClassConstructor {
    new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor){
    return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {

    constructor(private dto: ClassConstructor){}

    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {        
        return handler.handle().pipe(
            map((data: ClassConstructor) => {
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true                 
                });
            })
        );
    }

}