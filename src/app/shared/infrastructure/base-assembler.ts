/**
 * @summary Base assembler class for model transformations.
 */
export class BaseAssembler<TEntity, TResponse> {
  toEntity(response: TResponse): TEntity {
    return response as unknown as TEntity;
  }

  toResponse(entity: TEntity): TResponse {
    return entity as unknown as TResponse;
  }
}
