using System.Collections.Generic;

namespace ASPNERCore31_JWT.Services
{
    public interface IRepository<TEntity,in TPk>
    {
        IEnumerable<TEntity> Get();
        TEntity Get(int id);
        TEntity Create(TEntity entity);
    }
}
