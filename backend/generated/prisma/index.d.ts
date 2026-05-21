
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Tienda
 * 
 */
export type Tienda = $Result.DefaultSelection<Prisma.$TiendaPayload>
/**
 * Model ClienteTienda
 * 
 */
export type ClienteTienda = $Result.DefaultSelection<Prisma.$ClienteTiendaPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Promocion
 * 
 */
export type Promocion = $Result.DefaultSelection<Prisma.$PromocionPayload>
/**
 * Model Recompensa
 * 
 */
export type Recompensa = $Result.DefaultSelection<Prisma.$RecompensaPayload>
/**
 * Model Qr
 * 
 */
export type Qr = $Result.DefaultSelection<Prisma.$QrPayload>
/**
 * Model Acumulacion
 * 
 */
export type Acumulacion = $Result.DefaultSelection<Prisma.$AcumulacionPayload>
/**
 * Model ProgresoPromocion
 * 
 */
export type ProgresoPromocion = $Result.DefaultSelection<Prisma.$ProgresoPromocionPayload>
/**
 * Model Canje
 * 
 */
export type Canje = $Result.DefaultSelection<Prisma.$CanjePayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tienda`: Exposes CRUD operations for the **Tienda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tiendas
    * const tiendas = await prisma.tienda.findMany()
    * ```
    */
  get tienda(): Prisma.TiendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clienteTienda`: Exposes CRUD operations for the **ClienteTienda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClienteTiendas
    * const clienteTiendas = await prisma.clienteTienda.findMany()
    * ```
    */
  get clienteTienda(): Prisma.ClienteTiendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promocion`: Exposes CRUD operations for the **Promocion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promocions
    * const promocions = await prisma.promocion.findMany()
    * ```
    */
  get promocion(): Prisma.PromocionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recompensa`: Exposes CRUD operations for the **Recompensa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recompensas
    * const recompensas = await prisma.recompensa.findMany()
    * ```
    */
  get recompensa(): Prisma.RecompensaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qr`: Exposes CRUD operations for the **Qr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qrs
    * const qrs = await prisma.qr.findMany()
    * ```
    */
  get qr(): Prisma.QrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acumulacion`: Exposes CRUD operations for the **Acumulacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acumulacions
    * const acumulacions = await prisma.acumulacion.findMany()
    * ```
    */
  get acumulacion(): Prisma.AcumulacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progresoPromocion`: Exposes CRUD operations for the **ProgresoPromocion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgresoPromocions
    * const progresoPromocions = await prisma.progresoPromocion.findMany()
    * ```
    */
  get progresoPromocion(): Prisma.ProgresoPromocionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.canje`: Exposes CRUD operations for the **Canje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Canjes
    * const canjes = await prisma.canje.findMany()
    * ```
    */
  get canje(): Prisma.CanjeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Tienda: 'Tienda',
    ClienteTienda: 'ClienteTienda',
    Categoria: 'Categoria',
    Producto: 'Producto',
    Promocion: 'Promocion',
    Recompensa: 'Recompensa',
    Qr: 'Qr',
    Acumulacion: 'Acumulacion',
    ProgresoPromocion: 'ProgresoPromocion',
    Canje: 'Canje',
    Token: 'Token',
    PasswordResetToken: 'PasswordResetToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "tienda" | "clienteTienda" | "categoria" | "producto" | "promocion" | "recompensa" | "qr" | "acumulacion" | "progresoPromocion" | "canje" | "token" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Tienda: {
        payload: Prisma.$TiendaPayload<ExtArgs>
        fields: Prisma.TiendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>
          }
          findFirst: {
            args: Prisma.TiendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>
          }
          findMany: {
            args: Prisma.TiendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>[]
          }
          create: {
            args: Prisma.TiendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>
          }
          createMany: {
            args: Prisma.TiendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>[]
          }
          delete: {
            args: Prisma.TiendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>
          }
          update: {
            args: Prisma.TiendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>
          }
          deleteMany: {
            args: Prisma.TiendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>[]
          }
          upsert: {
            args: Prisma.TiendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiendaPayload>
          }
          aggregate: {
            args: Prisma.TiendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTienda>
          }
          groupBy: {
            args: Prisma.TiendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiendaCountArgs<ExtArgs>
            result: $Utils.Optional<TiendaCountAggregateOutputType> | number
          }
        }
      }
      ClienteTienda: {
        payload: Prisma.$ClienteTiendaPayload<ExtArgs>
        fields: Prisma.ClienteTiendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteTiendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteTiendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>
          }
          findFirst: {
            args: Prisma.ClienteTiendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteTiendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>
          }
          findMany: {
            args: Prisma.ClienteTiendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>[]
          }
          create: {
            args: Prisma.ClienteTiendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>
          }
          createMany: {
            args: Prisma.ClienteTiendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteTiendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>[]
          }
          delete: {
            args: Prisma.ClienteTiendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>
          }
          update: {
            args: Prisma.ClienteTiendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>
          }
          deleteMany: {
            args: Prisma.ClienteTiendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteTiendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteTiendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>[]
          }
          upsert: {
            args: Prisma.ClienteTiendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteTiendaPayload>
          }
          aggregate: {
            args: Prisma.ClienteTiendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClienteTienda>
          }
          groupBy: {
            args: Prisma.ClienteTiendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteTiendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteTiendaCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteTiendaCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Promocion: {
        payload: Prisma.$PromocionPayload<ExtArgs>
        fields: Prisma.PromocionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromocionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromocionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          findFirst: {
            args: Prisma.PromocionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromocionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          findMany: {
            args: Prisma.PromocionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>[]
          }
          create: {
            args: Prisma.PromocionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          createMany: {
            args: Prisma.PromocionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromocionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>[]
          }
          delete: {
            args: Prisma.PromocionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          update: {
            args: Prisma.PromocionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          deleteMany: {
            args: Prisma.PromocionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromocionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromocionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>[]
          }
          upsert: {
            args: Prisma.PromocionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          aggregate: {
            args: Prisma.PromocionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromocion>
          }
          groupBy: {
            args: Prisma.PromocionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromocionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromocionCountArgs<ExtArgs>
            result: $Utils.Optional<PromocionCountAggregateOutputType> | number
          }
        }
      }
      Recompensa: {
        payload: Prisma.$RecompensaPayload<ExtArgs>
        fields: Prisma.RecompensaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecompensaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecompensaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>
          }
          findFirst: {
            args: Prisma.RecompensaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecompensaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>
          }
          findMany: {
            args: Prisma.RecompensaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>[]
          }
          create: {
            args: Prisma.RecompensaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>
          }
          createMany: {
            args: Prisma.RecompensaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecompensaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>[]
          }
          delete: {
            args: Prisma.RecompensaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>
          }
          update: {
            args: Prisma.RecompensaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>
          }
          deleteMany: {
            args: Prisma.RecompensaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecompensaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecompensaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>[]
          }
          upsert: {
            args: Prisma.RecompensaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecompensaPayload>
          }
          aggregate: {
            args: Prisma.RecompensaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecompensa>
          }
          groupBy: {
            args: Prisma.RecompensaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecompensaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecompensaCountArgs<ExtArgs>
            result: $Utils.Optional<RecompensaCountAggregateOutputType> | number
          }
        }
      }
      Qr: {
        payload: Prisma.$QrPayload<ExtArgs>
        fields: Prisma.QrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>
          }
          findFirst: {
            args: Prisma.QrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>
          }
          findMany: {
            args: Prisma.QrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>[]
          }
          create: {
            args: Prisma.QrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>
          }
          createMany: {
            args: Prisma.QrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QrCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>[]
          }
          delete: {
            args: Prisma.QrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>
          }
          update: {
            args: Prisma.QrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>
          }
          deleteMany: {
            args: Prisma.QrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QrUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>[]
          }
          upsert: {
            args: Prisma.QrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrPayload>
          }
          aggregate: {
            args: Prisma.QrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQr>
          }
          groupBy: {
            args: Prisma.QrGroupByArgs<ExtArgs>
            result: $Utils.Optional<QrGroupByOutputType>[]
          }
          count: {
            args: Prisma.QrCountArgs<ExtArgs>
            result: $Utils.Optional<QrCountAggregateOutputType> | number
          }
        }
      }
      Acumulacion: {
        payload: Prisma.$AcumulacionPayload<ExtArgs>
        fields: Prisma.AcumulacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcumulacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcumulacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>
          }
          findFirst: {
            args: Prisma.AcumulacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcumulacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>
          }
          findMany: {
            args: Prisma.AcumulacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>[]
          }
          create: {
            args: Prisma.AcumulacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>
          }
          createMany: {
            args: Prisma.AcumulacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcumulacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>[]
          }
          delete: {
            args: Prisma.AcumulacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>
          }
          update: {
            args: Prisma.AcumulacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>
          }
          deleteMany: {
            args: Prisma.AcumulacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcumulacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcumulacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>[]
          }
          upsert: {
            args: Prisma.AcumulacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcumulacionPayload>
          }
          aggregate: {
            args: Prisma.AcumulacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcumulacion>
          }
          groupBy: {
            args: Prisma.AcumulacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcumulacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcumulacionCountArgs<ExtArgs>
            result: $Utils.Optional<AcumulacionCountAggregateOutputType> | number
          }
        }
      }
      ProgresoPromocion: {
        payload: Prisma.$ProgresoPromocionPayload<ExtArgs>
        fields: Prisma.ProgresoPromocionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoPromocionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoPromocionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>
          }
          findFirst: {
            args: Prisma.ProgresoPromocionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoPromocionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>
          }
          findMany: {
            args: Prisma.ProgresoPromocionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>[]
          }
          create: {
            args: Prisma.ProgresoPromocionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>
          }
          createMany: {
            args: Prisma.ProgresoPromocionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoPromocionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>[]
          }
          delete: {
            args: Prisma.ProgresoPromocionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>
          }
          update: {
            args: Prisma.ProgresoPromocionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoPromocionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoPromocionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgresoPromocionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>[]
          }
          upsert: {
            args: Prisma.ProgresoPromocionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPromocionPayload>
          }
          aggregate: {
            args: Prisma.ProgresoPromocionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgresoPromocion>
          }
          groupBy: {
            args: Prisma.ProgresoPromocionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoPromocionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoPromocionCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoPromocionCountAggregateOutputType> | number
          }
        }
      }
      Canje: {
        payload: Prisma.$CanjePayload<ExtArgs>
        fields: Prisma.CanjeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CanjeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CanjeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>
          }
          findFirst: {
            args: Prisma.CanjeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CanjeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>
          }
          findMany: {
            args: Prisma.CanjeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>[]
          }
          create: {
            args: Prisma.CanjeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>
          }
          createMany: {
            args: Prisma.CanjeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CanjeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>[]
          }
          delete: {
            args: Prisma.CanjeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>
          }
          update: {
            args: Prisma.CanjeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>
          }
          deleteMany: {
            args: Prisma.CanjeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CanjeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CanjeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>[]
          }
          upsert: {
            args: Prisma.CanjeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanjePayload>
          }
          aggregate: {
            args: Prisma.CanjeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanje>
          }
          groupBy: {
            args: Prisma.CanjeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanjeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CanjeCountArgs<ExtArgs>
            result: $Utils.Optional<CanjeCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    tienda?: TiendaOmit
    clienteTienda?: ClienteTiendaOmit
    categoria?: CategoriaOmit
    producto?: ProductoOmit
    promocion?: PromocionOmit
    recompensa?: RecompensaOmit
    qr?: QrOmit
    acumulacion?: AcumulacionOmit
    progresoPromocion?: ProgresoPromocionOmit
    canje?: CanjeOmit
    token?: TokenOmit
    passwordResetToken?: PasswordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    tiendas: number
    qrs: number
    acumulaciones: number
    progresos: number
    canjes: number
    tokens: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiendas?: boolean | ClienteCountOutputTypeCountTiendasArgs
    qrs?: boolean | ClienteCountOutputTypeCountQrsArgs
    acumulaciones?: boolean | ClienteCountOutputTypeCountAcumulacionesArgs
    progresos?: boolean | ClienteCountOutputTypeCountProgresosArgs
    canjes?: boolean | ClienteCountOutputTypeCountCanjesArgs
    tokens?: boolean | ClienteCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountTiendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteTiendaWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountQrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAcumulacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcumulacionWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoPromocionWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountCanjesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanjeWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type TiendaCountOutputType
   */

  export type TiendaCountOutputType = {
    clientes: number
    categorias: number
    productos: number
    promociones: number
    qrs: number
    tokens: number
  }

  export type TiendaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | TiendaCountOutputTypeCountClientesArgs
    categorias?: boolean | TiendaCountOutputTypeCountCategoriasArgs
    productos?: boolean | TiendaCountOutputTypeCountProductosArgs
    promociones?: boolean | TiendaCountOutputTypeCountPromocionesArgs
    qrs?: boolean | TiendaCountOutputTypeCountQrsArgs
    tokens?: boolean | TiendaCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiendaCountOutputType
     */
    select?: TiendaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteTiendaWhereInput
  }

  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }

  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeCountPromocionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocionWhereInput
  }

  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeCountQrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrWhereInput
  }

  /**
   * TiendaCountOutputType without action
   */
  export type TiendaCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    promociones: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promociones?: boolean | ProductoCountOutputTypeCountPromocionesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPromocionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocionWhereInput
  }


  /**
   * Count Type PromocionCountOutputType
   */

  export type PromocionCountOutputType = {
    acumulaciones: number
    progresos: number
  }

  export type PromocionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acumulaciones?: boolean | PromocionCountOutputTypeCountAcumulacionesArgs
    progresos?: boolean | PromocionCountOutputTypeCountProgresosArgs
  }

  // Custom InputTypes
  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromocionCountOutputType
     */
    select?: PromocionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeCountAcumulacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcumulacionWhereInput
  }

  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoPromocionWhereInput
  }


  /**
   * Count Type RecompensaCountOutputType
   */

  export type RecompensaCountOutputType = {
    canjes: number
  }

  export type RecompensaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canjes?: boolean | RecompensaCountOutputTypeCountCanjesArgs
  }

  // Custom InputTypes
  /**
   * RecompensaCountOutputType without action
   */
  export type RecompensaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecompensaCountOutputType
     */
    select?: RecompensaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecompensaCountOutputType without action
   */
  export type RecompensaCountOutputTypeCountCanjesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanjeWhereInput
  }


  /**
   * Count Type QrCountOutputType
   */

  export type QrCountOutputType = {
    acumulaciones: number
  }

  export type QrCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acumulaciones?: boolean | QrCountOutputTypeCountAcumulacionesArgs
  }

  // Custom InputTypes
  /**
   * QrCountOutputType without action
   */
  export type QrCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCountOutputType
     */
    select?: QrCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QrCountOutputType without action
   */
  export type QrCountOutputTypeCountAcumulacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcumulacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    fechaNacimiento: Date | null
    email: string | null
    password_hash: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    fechaNacimiento: Date | null
    email: string | null
    password_hash: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    telefono: number
    fechaNacimiento: number
    email: number
    password_hash: number
    estado: number
    createdAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    telefono?: true
    fechaNacimiento?: true
    email?: true
    password_hash?: true
    estado?: true
    createdAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    telefono?: true
    fechaNacimiento?: true
    email?: true
    password_hash?: true
    estado?: true
    createdAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    telefono?: true
    fechaNacimiento?: true
    email?: true
    password_hash?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nombre: string
    apellido: string
    telefono: string | null
    fechaNacimiento: Date | null
    email: string
    password_hash: string
    estado: string | null
    createdAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
    tiendas?: boolean | Cliente$tiendasArgs<ExtArgs>
    qrs?: boolean | Cliente$qrsArgs<ExtArgs>
    acumulaciones?: boolean | Cliente$acumulacionesArgs<ExtArgs>
    progresos?: boolean | Cliente$progresosArgs<ExtArgs>
    canjes?: boolean | Cliente$canjesArgs<ExtArgs>
    tokens?: boolean | Cliente$tokensArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "telefono" | "fechaNacimiento" | "email" | "password_hash" | "estado" | "createdAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiendas?: boolean | Cliente$tiendasArgs<ExtArgs>
    qrs?: boolean | Cliente$qrsArgs<ExtArgs>
    acumulaciones?: boolean | Cliente$acumulacionesArgs<ExtArgs>
    progresos?: boolean | Cliente$progresosArgs<ExtArgs>
    canjes?: boolean | Cliente$canjesArgs<ExtArgs>
    tokens?: boolean | Cliente$tokensArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      tiendas: Prisma.$ClienteTiendaPayload<ExtArgs>[]
      qrs: Prisma.$QrPayload<ExtArgs>[]
      acumulaciones: Prisma.$AcumulacionPayload<ExtArgs>[]
      progresos: Prisma.$ProgresoPromocionPayload<ExtArgs>[]
      canjes: Prisma.$CanjePayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      apellido: string
      telefono: string | null
      fechaNacimiento: Date | null
      email: string
      password_hash: string
      estado: string | null
      createdAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiendas<T extends Cliente$tiendasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$tiendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qrs<T extends Cliente$qrsArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$qrsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acumulaciones<T extends Cliente$acumulacionesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$acumulacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progresos<T extends Cliente$progresosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    canjes<T extends Cliente$canjesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$canjesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends Cliente$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly apellido: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly fechaNacimiento: FieldRef<"Cliente", 'DateTime'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly password_hash: FieldRef<"Cliente", 'String'>
    readonly estado: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.tiendas
   */
  export type Cliente$tiendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    where?: ClienteTiendaWhereInput
    orderBy?: ClienteTiendaOrderByWithRelationInput | ClienteTiendaOrderByWithRelationInput[]
    cursor?: ClienteTiendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteTiendaScalarFieldEnum | ClienteTiendaScalarFieldEnum[]
  }

  /**
   * Cliente.qrs
   */
  export type Cliente$qrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    where?: QrWhereInput
    orderBy?: QrOrderByWithRelationInput | QrOrderByWithRelationInput[]
    cursor?: QrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QrScalarFieldEnum | QrScalarFieldEnum[]
  }

  /**
   * Cliente.acumulaciones
   */
  export type Cliente$acumulacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    where?: AcumulacionWhereInput
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    cursor?: AcumulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcumulacionScalarFieldEnum | AcumulacionScalarFieldEnum[]
  }

  /**
   * Cliente.progresos
   */
  export type Cliente$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    where?: ProgresoPromocionWhereInput
    orderBy?: ProgresoPromocionOrderByWithRelationInput | ProgresoPromocionOrderByWithRelationInput[]
    cursor?: ProgresoPromocionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoPromocionScalarFieldEnum | ProgresoPromocionScalarFieldEnum[]
  }

  /**
   * Cliente.canjes
   */
  export type Cliente$canjesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    where?: CanjeWhereInput
    orderBy?: CanjeOrderByWithRelationInput | CanjeOrderByWithRelationInput[]
    cursor?: CanjeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CanjeScalarFieldEnum | CanjeScalarFieldEnum[]
  }

  /**
   * Cliente.tokens
   */
  export type Cliente$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Tienda
   */

  export type AggregateTienda = {
    _count: TiendaCountAggregateOutputType | null
    _min: TiendaMinAggregateOutputType | null
    _max: TiendaMaxAggregateOutputType | null
  }

  export type TiendaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    logo_url: string | null
    email: string | null
    password_hash: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type TiendaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    logo_url: string | null
    email: string | null
    password_hash: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type TiendaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    logo_url: number
    email: number
    password_hash: number
    estado: number
    createdAt: number
    _all: number
  }


  export type TiendaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    logo_url?: true
    email?: true
    password_hash?: true
    estado?: true
    createdAt?: true
  }

  export type TiendaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    logo_url?: true
    email?: true
    password_hash?: true
    estado?: true
    createdAt?: true
  }

  export type TiendaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    logo_url?: true
    email?: true
    password_hash?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type TiendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tienda to aggregate.
     */
    where?: TiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiendas to fetch.
     */
    orderBy?: TiendaOrderByWithRelationInput | TiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tiendas
    **/
    _count?: true | TiendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiendaMaxAggregateInputType
  }

  export type GetTiendaAggregateType<T extends TiendaAggregateArgs> = {
        [P in keyof T & keyof AggregateTienda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTienda[P]>
      : GetScalarType<T[P], AggregateTienda[P]>
  }




  export type TiendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiendaWhereInput
    orderBy?: TiendaOrderByWithAggregationInput | TiendaOrderByWithAggregationInput[]
    by: TiendaScalarFieldEnum[] | TiendaScalarFieldEnum
    having?: TiendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiendaCountAggregateInputType | true
    _min?: TiendaMinAggregateInputType
    _max?: TiendaMaxAggregateInputType
  }

  export type TiendaGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    logo_url: string | null
    email: string
    password_hash: string
    estado: string | null
    createdAt: Date
    _count: TiendaCountAggregateOutputType | null
    _min: TiendaMinAggregateOutputType | null
    _max: TiendaMaxAggregateOutputType | null
  }

  type GetTiendaGroupByPayload<T extends TiendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiendaGroupByOutputType[P]>
            : GetScalarType<T[P], TiendaGroupByOutputType[P]>
        }
      >
    >


  export type TiendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    logo_url?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
    clientes?: boolean | Tienda$clientesArgs<ExtArgs>
    categorias?: boolean | Tienda$categoriasArgs<ExtArgs>
    productos?: boolean | Tienda$productosArgs<ExtArgs>
    promociones?: boolean | Tienda$promocionesArgs<ExtArgs>
    qrs?: boolean | Tienda$qrsArgs<ExtArgs>
    tokens?: boolean | Tienda$tokensArgs<ExtArgs>
    _count?: boolean | TiendaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tienda"]>

  export type TiendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    logo_url?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tienda"]>

  export type TiendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    logo_url?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tienda"]>

  export type TiendaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    logo_url?: boolean
    email?: boolean
    password_hash?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type TiendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "logo_url" | "email" | "password_hash" | "estado" | "createdAt", ExtArgs["result"]["tienda"]>
  export type TiendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | Tienda$clientesArgs<ExtArgs>
    categorias?: boolean | Tienda$categoriasArgs<ExtArgs>
    productos?: boolean | Tienda$productosArgs<ExtArgs>
    promociones?: boolean | Tienda$promocionesArgs<ExtArgs>
    qrs?: boolean | Tienda$qrsArgs<ExtArgs>
    tokens?: boolean | Tienda$tokensArgs<ExtArgs>
    _count?: boolean | TiendaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TiendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TiendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TiendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tienda"
    objects: {
      clientes: Prisma.$ClienteTiendaPayload<ExtArgs>[]
      categorias: Prisma.$CategoriaPayload<ExtArgs>[]
      productos: Prisma.$ProductoPayload<ExtArgs>[]
      promociones: Prisma.$PromocionPayload<ExtArgs>[]
      qrs: Prisma.$QrPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      logo_url: string | null
      email: string
      password_hash: string
      estado: string | null
      createdAt: Date
    }, ExtArgs["result"]["tienda"]>
    composites: {}
  }

  type TiendaGetPayload<S extends boolean | null | undefined | TiendaDefaultArgs> = $Result.GetResult<Prisma.$TiendaPayload, S>

  type TiendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiendaCountAggregateInputType | true
    }

  export interface TiendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tienda'], meta: { name: 'Tienda' } }
    /**
     * Find zero or one Tienda that matches the filter.
     * @param {TiendaFindUniqueArgs} args - Arguments to find a Tienda
     * @example
     * // Get one Tienda
     * const tienda = await prisma.tienda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiendaFindUniqueArgs>(args: SelectSubset<T, TiendaFindUniqueArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tienda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiendaFindUniqueOrThrowArgs} args - Arguments to find a Tienda
     * @example
     * // Get one Tienda
     * const tienda = await prisma.tienda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiendaFindUniqueOrThrowArgs>(args: SelectSubset<T, TiendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tienda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaFindFirstArgs} args - Arguments to find a Tienda
     * @example
     * // Get one Tienda
     * const tienda = await prisma.tienda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiendaFindFirstArgs>(args?: SelectSubset<T, TiendaFindFirstArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tienda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaFindFirstOrThrowArgs} args - Arguments to find a Tienda
     * @example
     * // Get one Tienda
     * const tienda = await prisma.tienda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiendaFindFirstOrThrowArgs>(args?: SelectSubset<T, TiendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tiendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tiendas
     * const tiendas = await prisma.tienda.findMany()
     * 
     * // Get first 10 Tiendas
     * const tiendas = await prisma.tienda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiendaWithIdOnly = await prisma.tienda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiendaFindManyArgs>(args?: SelectSubset<T, TiendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tienda.
     * @param {TiendaCreateArgs} args - Arguments to create a Tienda.
     * @example
     * // Create one Tienda
     * const Tienda = await prisma.tienda.create({
     *   data: {
     *     // ... data to create a Tienda
     *   }
     * })
     * 
     */
    create<T extends TiendaCreateArgs>(args: SelectSubset<T, TiendaCreateArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tiendas.
     * @param {TiendaCreateManyArgs} args - Arguments to create many Tiendas.
     * @example
     * // Create many Tiendas
     * const tienda = await prisma.tienda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiendaCreateManyArgs>(args?: SelectSubset<T, TiendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tiendas and returns the data saved in the database.
     * @param {TiendaCreateManyAndReturnArgs} args - Arguments to create many Tiendas.
     * @example
     * // Create many Tiendas
     * const tienda = await prisma.tienda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tiendas and only return the `id`
     * const tiendaWithIdOnly = await prisma.tienda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiendaCreateManyAndReturnArgs>(args?: SelectSubset<T, TiendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tienda.
     * @param {TiendaDeleteArgs} args - Arguments to delete one Tienda.
     * @example
     * // Delete one Tienda
     * const Tienda = await prisma.tienda.delete({
     *   where: {
     *     // ... filter to delete one Tienda
     *   }
     * })
     * 
     */
    delete<T extends TiendaDeleteArgs>(args: SelectSubset<T, TiendaDeleteArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tienda.
     * @param {TiendaUpdateArgs} args - Arguments to update one Tienda.
     * @example
     * // Update one Tienda
     * const tienda = await prisma.tienda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiendaUpdateArgs>(args: SelectSubset<T, TiendaUpdateArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tiendas.
     * @param {TiendaDeleteManyArgs} args - Arguments to filter Tiendas to delete.
     * @example
     * // Delete a few Tiendas
     * const { count } = await prisma.tienda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiendaDeleteManyArgs>(args?: SelectSubset<T, TiendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tiendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tiendas
     * const tienda = await prisma.tienda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiendaUpdateManyArgs>(args: SelectSubset<T, TiendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tiendas and returns the data updated in the database.
     * @param {TiendaUpdateManyAndReturnArgs} args - Arguments to update many Tiendas.
     * @example
     * // Update many Tiendas
     * const tienda = await prisma.tienda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tiendas and only return the `id`
     * const tiendaWithIdOnly = await prisma.tienda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiendaUpdateManyAndReturnArgs>(args: SelectSubset<T, TiendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tienda.
     * @param {TiendaUpsertArgs} args - Arguments to update or create a Tienda.
     * @example
     * // Update or create a Tienda
     * const tienda = await prisma.tienda.upsert({
     *   create: {
     *     // ... data to create a Tienda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tienda we want to update
     *   }
     * })
     */
    upsert<T extends TiendaUpsertArgs>(args: SelectSubset<T, TiendaUpsertArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tiendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaCountArgs} args - Arguments to filter Tiendas to count.
     * @example
     * // Count the number of Tiendas
     * const count = await prisma.tienda.count({
     *   where: {
     *     // ... the filter for the Tiendas we want to count
     *   }
     * })
    **/
    count<T extends TiendaCountArgs>(
      args?: Subset<T, TiendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tienda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiendaAggregateArgs>(args: Subset<T, TiendaAggregateArgs>): Prisma.PrismaPromise<GetTiendaAggregateType<T>>

    /**
     * Group by Tienda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiendaGroupByArgs['orderBy'] }
        : { orderBy?: TiendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tienda model
   */
  readonly fields: TiendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tienda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends Tienda$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Tienda$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends Tienda$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, Tienda$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productos<T extends Tienda$productosArgs<ExtArgs> = {}>(args?: Subset<T, Tienda$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promociones<T extends Tienda$promocionesArgs<ExtArgs> = {}>(args?: Subset<T, Tienda$promocionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qrs<T extends Tienda$qrsArgs<ExtArgs> = {}>(args?: Subset<T, Tienda$qrsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends Tienda$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Tienda$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tienda model
   */
  interface TiendaFieldRefs {
    readonly id: FieldRef<"Tienda", 'String'>
    readonly nombre: FieldRef<"Tienda", 'String'>
    readonly descripcion: FieldRef<"Tienda", 'String'>
    readonly logo_url: FieldRef<"Tienda", 'String'>
    readonly email: FieldRef<"Tienda", 'String'>
    readonly password_hash: FieldRef<"Tienda", 'String'>
    readonly estado: FieldRef<"Tienda", 'String'>
    readonly createdAt: FieldRef<"Tienda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tienda findUnique
   */
  export type TiendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * Filter, which Tienda to fetch.
     */
    where: TiendaWhereUniqueInput
  }

  /**
   * Tienda findUniqueOrThrow
   */
  export type TiendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * Filter, which Tienda to fetch.
     */
    where: TiendaWhereUniqueInput
  }

  /**
   * Tienda findFirst
   */
  export type TiendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * Filter, which Tienda to fetch.
     */
    where?: TiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiendas to fetch.
     */
    orderBy?: TiendaOrderByWithRelationInput | TiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tiendas.
     */
    cursor?: TiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiendas.
     */
    distinct?: TiendaScalarFieldEnum | TiendaScalarFieldEnum[]
  }

  /**
   * Tienda findFirstOrThrow
   */
  export type TiendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * Filter, which Tienda to fetch.
     */
    where?: TiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiendas to fetch.
     */
    orderBy?: TiendaOrderByWithRelationInput | TiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tiendas.
     */
    cursor?: TiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiendas.
     */
    distinct?: TiendaScalarFieldEnum | TiendaScalarFieldEnum[]
  }

  /**
   * Tienda findMany
   */
  export type TiendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * Filter, which Tiendas to fetch.
     */
    where?: TiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiendas to fetch.
     */
    orderBy?: TiendaOrderByWithRelationInput | TiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tiendas.
     */
    cursor?: TiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiendas.
     */
    distinct?: TiendaScalarFieldEnum | TiendaScalarFieldEnum[]
  }

  /**
   * Tienda create
   */
  export type TiendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tienda.
     */
    data: XOR<TiendaCreateInput, TiendaUncheckedCreateInput>
  }

  /**
   * Tienda createMany
   */
  export type TiendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tiendas.
     */
    data: TiendaCreateManyInput | TiendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tienda createManyAndReturn
   */
  export type TiendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * The data used to create many Tiendas.
     */
    data: TiendaCreateManyInput | TiendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tienda update
   */
  export type TiendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tienda.
     */
    data: XOR<TiendaUpdateInput, TiendaUncheckedUpdateInput>
    /**
     * Choose, which Tienda to update.
     */
    where: TiendaWhereUniqueInput
  }

  /**
   * Tienda updateMany
   */
  export type TiendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tiendas.
     */
    data: XOR<TiendaUpdateManyMutationInput, TiendaUncheckedUpdateManyInput>
    /**
     * Filter which Tiendas to update
     */
    where?: TiendaWhereInput
    /**
     * Limit how many Tiendas to update.
     */
    limit?: number
  }

  /**
   * Tienda updateManyAndReturn
   */
  export type TiendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * The data used to update Tiendas.
     */
    data: XOR<TiendaUpdateManyMutationInput, TiendaUncheckedUpdateManyInput>
    /**
     * Filter which Tiendas to update
     */
    where?: TiendaWhereInput
    /**
     * Limit how many Tiendas to update.
     */
    limit?: number
  }

  /**
   * Tienda upsert
   */
  export type TiendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tienda to update in case it exists.
     */
    where: TiendaWhereUniqueInput
    /**
     * In case the Tienda found by the `where` argument doesn't exist, create a new Tienda with this data.
     */
    create: XOR<TiendaCreateInput, TiendaUncheckedCreateInput>
    /**
     * In case the Tienda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiendaUpdateInput, TiendaUncheckedUpdateInput>
  }

  /**
   * Tienda delete
   */
  export type TiendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    /**
     * Filter which Tienda to delete.
     */
    where: TiendaWhereUniqueInput
  }

  /**
   * Tienda deleteMany
   */
  export type TiendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tiendas to delete
     */
    where?: TiendaWhereInput
    /**
     * Limit how many Tiendas to delete.
     */
    limit?: number
  }

  /**
   * Tienda.clientes
   */
  export type Tienda$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    where?: ClienteTiendaWhereInput
    orderBy?: ClienteTiendaOrderByWithRelationInput | ClienteTiendaOrderByWithRelationInput[]
    cursor?: ClienteTiendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteTiendaScalarFieldEnum | ClienteTiendaScalarFieldEnum[]
  }

  /**
   * Tienda.categorias
   */
  export type Tienda$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Tienda.productos
   */
  export type Tienda$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Tienda.promociones
   */
  export type Tienda$promocionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    where?: PromocionWhereInput
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    cursor?: PromocionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Tienda.qrs
   */
  export type Tienda$qrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    where?: QrWhereInput
    orderBy?: QrOrderByWithRelationInput | QrOrderByWithRelationInput[]
    cursor?: QrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QrScalarFieldEnum | QrScalarFieldEnum[]
  }

  /**
   * Tienda.tokens
   */
  export type Tienda$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Tienda without action
   */
  export type TiendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
  }


  /**
   * Model ClienteTienda
   */

  export type AggregateClienteTienda = {
    _count: ClienteTiendaCountAggregateOutputType | null
    _min: ClienteTiendaMinAggregateOutputType | null
    _max: ClienteTiendaMaxAggregateOutputType | null
  }

  export type ClienteTiendaMinAggregateOutputType = {
    idCliente: string | null
    idTienda: string | null
    fechaRegistro: Date | null
    estado: string | null
  }

  export type ClienteTiendaMaxAggregateOutputType = {
    idCliente: string | null
    idTienda: string | null
    fechaRegistro: Date | null
    estado: string | null
  }

  export type ClienteTiendaCountAggregateOutputType = {
    idCliente: number
    idTienda: number
    fechaRegistro: number
    estado: number
    _all: number
  }


  export type ClienteTiendaMinAggregateInputType = {
    idCliente?: true
    idTienda?: true
    fechaRegistro?: true
    estado?: true
  }

  export type ClienteTiendaMaxAggregateInputType = {
    idCliente?: true
    idTienda?: true
    fechaRegistro?: true
    estado?: true
  }

  export type ClienteTiendaCountAggregateInputType = {
    idCliente?: true
    idTienda?: true
    fechaRegistro?: true
    estado?: true
    _all?: true
  }

  export type ClienteTiendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClienteTienda to aggregate.
     */
    where?: ClienteTiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteTiendas to fetch.
     */
    orderBy?: ClienteTiendaOrderByWithRelationInput | ClienteTiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteTiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteTiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteTiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClienteTiendas
    **/
    _count?: true | ClienteTiendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteTiendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteTiendaMaxAggregateInputType
  }

  export type GetClienteTiendaAggregateType<T extends ClienteTiendaAggregateArgs> = {
        [P in keyof T & keyof AggregateClienteTienda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClienteTienda[P]>
      : GetScalarType<T[P], AggregateClienteTienda[P]>
  }




  export type ClienteTiendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteTiendaWhereInput
    orderBy?: ClienteTiendaOrderByWithAggregationInput | ClienteTiendaOrderByWithAggregationInput[]
    by: ClienteTiendaScalarFieldEnum[] | ClienteTiendaScalarFieldEnum
    having?: ClienteTiendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteTiendaCountAggregateInputType | true
    _min?: ClienteTiendaMinAggregateInputType
    _max?: ClienteTiendaMaxAggregateInputType
  }

  export type ClienteTiendaGroupByOutputType = {
    idCliente: string
    idTienda: string
    fechaRegistro: Date
    estado: string | null
    _count: ClienteTiendaCountAggregateOutputType | null
    _min: ClienteTiendaMinAggregateOutputType | null
    _max: ClienteTiendaMaxAggregateOutputType | null
  }

  type GetClienteTiendaGroupByPayload<T extends ClienteTiendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteTiendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteTiendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteTiendaGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteTiendaGroupByOutputType[P]>
        }
      >
    >


  export type ClienteTiendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idTienda?: boolean
    fechaRegistro?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clienteTienda"]>

  export type ClienteTiendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idTienda?: boolean
    fechaRegistro?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clienteTienda"]>

  export type ClienteTiendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idTienda?: boolean
    fechaRegistro?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clienteTienda"]>

  export type ClienteTiendaSelectScalar = {
    idCliente?: boolean
    idTienda?: boolean
    fechaRegistro?: boolean
    estado?: boolean
  }

  export type ClienteTiendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCliente" | "idTienda" | "fechaRegistro" | "estado", ExtArgs["result"]["clienteTienda"]>
  export type ClienteTiendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }
  export type ClienteTiendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }
  export type ClienteTiendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }

  export type $ClienteTiendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClienteTienda"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      tienda: Prisma.$TiendaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCliente: string
      idTienda: string
      fechaRegistro: Date
      estado: string | null
    }, ExtArgs["result"]["clienteTienda"]>
    composites: {}
  }

  type ClienteTiendaGetPayload<S extends boolean | null | undefined | ClienteTiendaDefaultArgs> = $Result.GetResult<Prisma.$ClienteTiendaPayload, S>

  type ClienteTiendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteTiendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteTiendaCountAggregateInputType | true
    }

  export interface ClienteTiendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClienteTienda'], meta: { name: 'ClienteTienda' } }
    /**
     * Find zero or one ClienteTienda that matches the filter.
     * @param {ClienteTiendaFindUniqueArgs} args - Arguments to find a ClienteTienda
     * @example
     * // Get one ClienteTienda
     * const clienteTienda = await prisma.clienteTienda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteTiendaFindUniqueArgs>(args: SelectSubset<T, ClienteTiendaFindUniqueArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClienteTienda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteTiendaFindUniqueOrThrowArgs} args - Arguments to find a ClienteTienda
     * @example
     * // Get one ClienteTienda
     * const clienteTienda = await prisma.clienteTienda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteTiendaFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteTiendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClienteTienda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaFindFirstArgs} args - Arguments to find a ClienteTienda
     * @example
     * // Get one ClienteTienda
     * const clienteTienda = await prisma.clienteTienda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteTiendaFindFirstArgs>(args?: SelectSubset<T, ClienteTiendaFindFirstArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClienteTienda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaFindFirstOrThrowArgs} args - Arguments to find a ClienteTienda
     * @example
     * // Get one ClienteTienda
     * const clienteTienda = await prisma.clienteTienda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteTiendaFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteTiendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClienteTiendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClienteTiendas
     * const clienteTiendas = await prisma.clienteTienda.findMany()
     * 
     * // Get first 10 ClienteTiendas
     * const clienteTiendas = await prisma.clienteTienda.findMany({ take: 10 })
     * 
     * // Only select the `idCliente`
     * const clienteTiendaWithIdClienteOnly = await prisma.clienteTienda.findMany({ select: { idCliente: true } })
     * 
     */
    findMany<T extends ClienteTiendaFindManyArgs>(args?: SelectSubset<T, ClienteTiendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClienteTienda.
     * @param {ClienteTiendaCreateArgs} args - Arguments to create a ClienteTienda.
     * @example
     * // Create one ClienteTienda
     * const ClienteTienda = await prisma.clienteTienda.create({
     *   data: {
     *     // ... data to create a ClienteTienda
     *   }
     * })
     * 
     */
    create<T extends ClienteTiendaCreateArgs>(args: SelectSubset<T, ClienteTiendaCreateArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClienteTiendas.
     * @param {ClienteTiendaCreateManyArgs} args - Arguments to create many ClienteTiendas.
     * @example
     * // Create many ClienteTiendas
     * const clienteTienda = await prisma.clienteTienda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteTiendaCreateManyArgs>(args?: SelectSubset<T, ClienteTiendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClienteTiendas and returns the data saved in the database.
     * @param {ClienteTiendaCreateManyAndReturnArgs} args - Arguments to create many ClienteTiendas.
     * @example
     * // Create many ClienteTiendas
     * const clienteTienda = await prisma.clienteTienda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClienteTiendas and only return the `idCliente`
     * const clienteTiendaWithIdClienteOnly = await prisma.clienteTienda.createManyAndReturn({
     *   select: { idCliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteTiendaCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteTiendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClienteTienda.
     * @param {ClienteTiendaDeleteArgs} args - Arguments to delete one ClienteTienda.
     * @example
     * // Delete one ClienteTienda
     * const ClienteTienda = await prisma.clienteTienda.delete({
     *   where: {
     *     // ... filter to delete one ClienteTienda
     *   }
     * })
     * 
     */
    delete<T extends ClienteTiendaDeleteArgs>(args: SelectSubset<T, ClienteTiendaDeleteArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClienteTienda.
     * @param {ClienteTiendaUpdateArgs} args - Arguments to update one ClienteTienda.
     * @example
     * // Update one ClienteTienda
     * const clienteTienda = await prisma.clienteTienda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteTiendaUpdateArgs>(args: SelectSubset<T, ClienteTiendaUpdateArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClienteTiendas.
     * @param {ClienteTiendaDeleteManyArgs} args - Arguments to filter ClienteTiendas to delete.
     * @example
     * // Delete a few ClienteTiendas
     * const { count } = await prisma.clienteTienda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteTiendaDeleteManyArgs>(args?: SelectSubset<T, ClienteTiendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClienteTiendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClienteTiendas
     * const clienteTienda = await prisma.clienteTienda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteTiendaUpdateManyArgs>(args: SelectSubset<T, ClienteTiendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClienteTiendas and returns the data updated in the database.
     * @param {ClienteTiendaUpdateManyAndReturnArgs} args - Arguments to update many ClienteTiendas.
     * @example
     * // Update many ClienteTiendas
     * const clienteTienda = await prisma.clienteTienda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClienteTiendas and only return the `idCliente`
     * const clienteTiendaWithIdClienteOnly = await prisma.clienteTienda.updateManyAndReturn({
     *   select: { idCliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteTiendaUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteTiendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClienteTienda.
     * @param {ClienteTiendaUpsertArgs} args - Arguments to update or create a ClienteTienda.
     * @example
     * // Update or create a ClienteTienda
     * const clienteTienda = await prisma.clienteTienda.upsert({
     *   create: {
     *     // ... data to create a ClienteTienda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClienteTienda we want to update
     *   }
     * })
     */
    upsert<T extends ClienteTiendaUpsertArgs>(args: SelectSubset<T, ClienteTiendaUpsertArgs<ExtArgs>>): Prisma__ClienteTiendaClient<$Result.GetResult<Prisma.$ClienteTiendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClienteTiendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaCountArgs} args - Arguments to filter ClienteTiendas to count.
     * @example
     * // Count the number of ClienteTiendas
     * const count = await prisma.clienteTienda.count({
     *   where: {
     *     // ... the filter for the ClienteTiendas we want to count
     *   }
     * })
    **/
    count<T extends ClienteTiendaCountArgs>(
      args?: Subset<T, ClienteTiendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteTiendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClienteTienda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteTiendaAggregateArgs>(args: Subset<T, ClienteTiendaAggregateArgs>): Prisma.PrismaPromise<GetClienteTiendaAggregateType<T>>

    /**
     * Group by ClienteTienda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteTiendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteTiendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteTiendaGroupByArgs['orderBy'] }
        : { orderBy?: ClienteTiendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteTiendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteTiendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClienteTienda model
   */
  readonly fields: ClienteTiendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClienteTienda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteTiendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tienda<T extends TiendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiendaDefaultArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClienteTienda model
   */
  interface ClienteTiendaFieldRefs {
    readonly idCliente: FieldRef<"ClienteTienda", 'String'>
    readonly idTienda: FieldRef<"ClienteTienda", 'String'>
    readonly fechaRegistro: FieldRef<"ClienteTienda", 'DateTime'>
    readonly estado: FieldRef<"ClienteTienda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClienteTienda findUnique
   */
  export type ClienteTiendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * Filter, which ClienteTienda to fetch.
     */
    where: ClienteTiendaWhereUniqueInput
  }

  /**
   * ClienteTienda findUniqueOrThrow
   */
  export type ClienteTiendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * Filter, which ClienteTienda to fetch.
     */
    where: ClienteTiendaWhereUniqueInput
  }

  /**
   * ClienteTienda findFirst
   */
  export type ClienteTiendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * Filter, which ClienteTienda to fetch.
     */
    where?: ClienteTiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteTiendas to fetch.
     */
    orderBy?: ClienteTiendaOrderByWithRelationInput | ClienteTiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClienteTiendas.
     */
    cursor?: ClienteTiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteTiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteTiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClienteTiendas.
     */
    distinct?: ClienteTiendaScalarFieldEnum | ClienteTiendaScalarFieldEnum[]
  }

  /**
   * ClienteTienda findFirstOrThrow
   */
  export type ClienteTiendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * Filter, which ClienteTienda to fetch.
     */
    where?: ClienteTiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteTiendas to fetch.
     */
    orderBy?: ClienteTiendaOrderByWithRelationInput | ClienteTiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClienteTiendas.
     */
    cursor?: ClienteTiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteTiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteTiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClienteTiendas.
     */
    distinct?: ClienteTiendaScalarFieldEnum | ClienteTiendaScalarFieldEnum[]
  }

  /**
   * ClienteTienda findMany
   */
  export type ClienteTiendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * Filter, which ClienteTiendas to fetch.
     */
    where?: ClienteTiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteTiendas to fetch.
     */
    orderBy?: ClienteTiendaOrderByWithRelationInput | ClienteTiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClienteTiendas.
     */
    cursor?: ClienteTiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteTiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteTiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClienteTiendas.
     */
    distinct?: ClienteTiendaScalarFieldEnum | ClienteTiendaScalarFieldEnum[]
  }

  /**
   * ClienteTienda create
   */
  export type ClienteTiendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * The data needed to create a ClienteTienda.
     */
    data: XOR<ClienteTiendaCreateInput, ClienteTiendaUncheckedCreateInput>
  }

  /**
   * ClienteTienda createMany
   */
  export type ClienteTiendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClienteTiendas.
     */
    data: ClienteTiendaCreateManyInput | ClienteTiendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClienteTienda createManyAndReturn
   */
  export type ClienteTiendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * The data used to create many ClienteTiendas.
     */
    data: ClienteTiendaCreateManyInput | ClienteTiendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClienteTienda update
   */
  export type ClienteTiendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * The data needed to update a ClienteTienda.
     */
    data: XOR<ClienteTiendaUpdateInput, ClienteTiendaUncheckedUpdateInput>
    /**
     * Choose, which ClienteTienda to update.
     */
    where: ClienteTiendaWhereUniqueInput
  }

  /**
   * ClienteTienda updateMany
   */
  export type ClienteTiendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClienteTiendas.
     */
    data: XOR<ClienteTiendaUpdateManyMutationInput, ClienteTiendaUncheckedUpdateManyInput>
    /**
     * Filter which ClienteTiendas to update
     */
    where?: ClienteTiendaWhereInput
    /**
     * Limit how many ClienteTiendas to update.
     */
    limit?: number
  }

  /**
   * ClienteTienda updateManyAndReturn
   */
  export type ClienteTiendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * The data used to update ClienteTiendas.
     */
    data: XOR<ClienteTiendaUpdateManyMutationInput, ClienteTiendaUncheckedUpdateManyInput>
    /**
     * Filter which ClienteTiendas to update
     */
    where?: ClienteTiendaWhereInput
    /**
     * Limit how many ClienteTiendas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClienteTienda upsert
   */
  export type ClienteTiendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * The filter to search for the ClienteTienda to update in case it exists.
     */
    where: ClienteTiendaWhereUniqueInput
    /**
     * In case the ClienteTienda found by the `where` argument doesn't exist, create a new ClienteTienda with this data.
     */
    create: XOR<ClienteTiendaCreateInput, ClienteTiendaUncheckedCreateInput>
    /**
     * In case the ClienteTienda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteTiendaUpdateInput, ClienteTiendaUncheckedUpdateInput>
  }

  /**
   * ClienteTienda delete
   */
  export type ClienteTiendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
    /**
     * Filter which ClienteTienda to delete.
     */
    where: ClienteTiendaWhereUniqueInput
  }

  /**
   * ClienteTienda deleteMany
   */
  export type ClienteTiendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClienteTiendas to delete
     */
    where?: ClienteTiendaWhereInput
    /**
     * Limit how many ClienteTiendas to delete.
     */
    limit?: number
  }

  /**
   * ClienteTienda without action
   */
  export type ClienteTiendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteTienda
     */
    select?: ClienteTiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteTienda
     */
    omit?: ClienteTiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteTiendaInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    idTienda: string | null
    nombre: string | null
    descripcion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    idTienda: string | null
    nombre: string | null
    descripcion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    idTienda: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    idTienda?: true
    nombre?: true
    descripcion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    idTienda?: true
    nombre?: true
    descripcion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    idTienda?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    idTienda: string
    nombre: string
    descripcion: string | null
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    nombre?: boolean
    descripcion?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    nombre?: boolean
    descripcion?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    nombre?: boolean
    descripcion?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    idTienda?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTienda" | "nombre" | "descripcion", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      tienda: Prisma.$TiendaPayload<ExtArgs>
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idTienda: string
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tienda<T extends TiendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiendaDefaultArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly idTienda: FieldRef<"Categoria", 'String'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    precio: Decimal | null
  }

  export type ProductoSumAggregateOutputType = {
    precio: Decimal | null
  }

  export type ProductoMinAggregateOutputType = {
    id: string | null
    idTienda: string | null
    idCategoria: string | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    imagen_url: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: string | null
    idTienda: string | null
    idCategoria: string | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    imagen_url: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    idTienda: number
    idCategoria: number
    nombre: number
    descripcion: number
    precio: number
    imagen_url: number
    estado: number
    createdAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    precio?: true
  }

  export type ProductoSumAggregateInputType = {
    precio?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    idTienda?: true
    idCategoria?: true
    nombre?: true
    descripcion?: true
    precio?: true
    imagen_url?: true
    estado?: true
    createdAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    idTienda?: true
    idCategoria?: true
    nombre?: true
    descripcion?: true
    precio?: true
    imagen_url?: true
    estado?: true
    createdAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    idTienda?: true
    idCategoria?: true
    nombre?: true
    descripcion?: true
    precio?: true
    imagen_url?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: string
    idTienda: string
    idCategoria: string | null
    nombre: string
    descripcion: string | null
    precio: Decimal
    imagen_url: string | null
    estado: string | null
    createdAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idCategoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    imagen_url?: boolean
    estado?: boolean
    createdAt?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
    promociones?: boolean | Producto$promocionesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idCategoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    imagen_url?: boolean
    estado?: boolean
    createdAt?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idCategoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    imagen_url?: boolean
    estado?: boolean
    createdAt?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    idTienda?: boolean
    idCategoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    imagen_url?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTienda" | "idCategoria" | "nombre" | "descripcion" | "precio" | "imagen_url" | "estado" | "createdAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
    promociones?: boolean | Producto$promocionesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
  }
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      tienda: Prisma.$TiendaPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      promociones: Prisma.$PromocionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idTienda: string
      idCategoria: string | null
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
      imagen_url: string | null
      estado: string | null
      createdAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tienda<T extends TiendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiendaDefaultArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends Producto$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    promociones<T extends Producto$promocionesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$promocionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'String'>
    readonly idTienda: FieldRef<"Producto", 'String'>
    readonly idCategoria: FieldRef<"Producto", 'String'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
    readonly imagen_url: FieldRef<"Producto", 'String'>
    readonly estado: FieldRef<"Producto", 'String'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.categoria
   */
  export type Producto$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Producto.promociones
   */
  export type Producto$promocionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    where?: PromocionWhereInput
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    cursor?: PromocionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Promocion
   */

  export type AggregatePromocion = {
    _count: PromocionCountAggregateOutputType | null
    _avg: PromocionAvgAggregateOutputType | null
    _sum: PromocionSumAggregateOutputType | null
    _min: PromocionMinAggregateOutputType | null
    _max: PromocionMaxAggregateOutputType | null
  }

  export type PromocionAvgAggregateOutputType = {
    unidadesObjetivo: number | null
  }

  export type PromocionSumAggregateOutputType = {
    unidadesObjetivo: number | null
  }

  export type PromocionMinAggregateOutputType = {
    id: string | null
    idTienda: string | null
    idProducto: string | null
    nombre: string | null
    descripcion: string | null
    unidadesObjetivo: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: string | null
    createdAt: Date | null
  }

  export type PromocionMaxAggregateOutputType = {
    id: string | null
    idTienda: string | null
    idProducto: string | null
    nombre: string | null
    descripcion: string | null
    unidadesObjetivo: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: string | null
    createdAt: Date | null
  }

  export type PromocionCountAggregateOutputType = {
    id: number
    idTienda: number
    idProducto: number
    nombre: number
    descripcion: number
    unidadesObjetivo: number
    fechaInicio: number
    fechaFin: number
    estado: number
    createdAt: number
    _all: number
  }


  export type PromocionAvgAggregateInputType = {
    unidadesObjetivo?: true
  }

  export type PromocionSumAggregateInputType = {
    unidadesObjetivo?: true
  }

  export type PromocionMinAggregateInputType = {
    id?: true
    idTienda?: true
    idProducto?: true
    nombre?: true
    descripcion?: true
    unidadesObjetivo?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    createdAt?: true
  }

  export type PromocionMaxAggregateInputType = {
    id?: true
    idTienda?: true
    idProducto?: true
    nombre?: true
    descripcion?: true
    unidadesObjetivo?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    createdAt?: true
  }

  export type PromocionCountAggregateInputType = {
    id?: true
    idTienda?: true
    idProducto?: true
    nombre?: true
    descripcion?: true
    unidadesObjetivo?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type PromocionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocion to aggregate.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promocions
    **/
    _count?: true | PromocionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromocionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromocionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromocionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromocionMaxAggregateInputType
  }

  export type GetPromocionAggregateType<T extends PromocionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromocion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromocion[P]>
      : GetScalarType<T[P], AggregatePromocion[P]>
  }




  export type PromocionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocionWhereInput
    orderBy?: PromocionOrderByWithAggregationInput | PromocionOrderByWithAggregationInput[]
    by: PromocionScalarFieldEnum[] | PromocionScalarFieldEnum
    having?: PromocionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromocionCountAggregateInputType | true
    _avg?: PromocionAvgAggregateInputType
    _sum?: PromocionSumAggregateInputType
    _min?: PromocionMinAggregateInputType
    _max?: PromocionMaxAggregateInputType
  }

  export type PromocionGroupByOutputType = {
    id: string
    idTienda: string
    idProducto: string
    nombre: string
    descripcion: string | null
    unidadesObjetivo: number
    fechaInicio: Date
    fechaFin: Date | null
    estado: string | null
    createdAt: Date
    _count: PromocionCountAggregateOutputType | null
    _avg: PromocionAvgAggregateOutputType | null
    _sum: PromocionSumAggregateOutputType | null
    _min: PromocionMinAggregateOutputType | null
    _max: PromocionMaxAggregateOutputType | null
  }

  type GetPromocionGroupByPayload<T extends PromocionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromocionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromocionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromocionGroupByOutputType[P]>
            : GetScalarType<T[P], PromocionGroupByOutputType[P]>
        }
      >
    >


  export type PromocionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidadesObjetivo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    recompensa?: boolean | Promocion$recompensaArgs<ExtArgs>
    acumulaciones?: boolean | Promocion$acumulacionesArgs<ExtArgs>
    progresos?: boolean | Promocion$progresosArgs<ExtArgs>
    _count?: boolean | PromocionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocion"]>

  export type PromocionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidadesObjetivo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocion"]>

  export type PromocionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidadesObjetivo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocion"]>

  export type PromocionSelectScalar = {
    id?: boolean
    idTienda?: boolean
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidadesObjetivo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type PromocionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTienda" | "idProducto" | "nombre" | "descripcion" | "unidadesObjetivo" | "fechaInicio" | "fechaFin" | "estado" | "createdAt", ExtArgs["result"]["promocion"]>
  export type PromocionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    recompensa?: boolean | Promocion$recompensaArgs<ExtArgs>
    acumulaciones?: boolean | Promocion$acumulacionesArgs<ExtArgs>
    progresos?: boolean | Promocion$progresosArgs<ExtArgs>
    _count?: boolean | PromocionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromocionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type PromocionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $PromocionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promocion"
    objects: {
      tienda: Prisma.$TiendaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
      recompensa: Prisma.$RecompensaPayload<ExtArgs> | null
      acumulaciones: Prisma.$AcumulacionPayload<ExtArgs>[]
      progresos: Prisma.$ProgresoPromocionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idTienda: string
      idProducto: string
      nombre: string
      descripcion: string | null
      unidadesObjetivo: number
      fechaInicio: Date
      fechaFin: Date | null
      estado: string | null
      createdAt: Date
    }, ExtArgs["result"]["promocion"]>
    composites: {}
  }

  type PromocionGetPayload<S extends boolean | null | undefined | PromocionDefaultArgs> = $Result.GetResult<Prisma.$PromocionPayload, S>

  type PromocionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromocionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromocionCountAggregateInputType | true
    }

  export interface PromocionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promocion'], meta: { name: 'Promocion' } }
    /**
     * Find zero or one Promocion that matches the filter.
     * @param {PromocionFindUniqueArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromocionFindUniqueArgs>(args: SelectSubset<T, PromocionFindUniqueArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promocion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromocionFindUniqueOrThrowArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromocionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromocionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindFirstArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromocionFindFirstArgs>(args?: SelectSubset<T, PromocionFindFirstArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindFirstOrThrowArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromocionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromocionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promocions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promocions
     * const promocions = await prisma.promocion.findMany()
     * 
     * // Get first 10 Promocions
     * const promocions = await prisma.promocion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promocionWithIdOnly = await prisma.promocion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromocionFindManyArgs>(args?: SelectSubset<T, PromocionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promocion.
     * @param {PromocionCreateArgs} args - Arguments to create a Promocion.
     * @example
     * // Create one Promocion
     * const Promocion = await prisma.promocion.create({
     *   data: {
     *     // ... data to create a Promocion
     *   }
     * })
     * 
     */
    create<T extends PromocionCreateArgs>(args: SelectSubset<T, PromocionCreateArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promocions.
     * @param {PromocionCreateManyArgs} args - Arguments to create many Promocions.
     * @example
     * // Create many Promocions
     * const promocion = await prisma.promocion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromocionCreateManyArgs>(args?: SelectSubset<T, PromocionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promocions and returns the data saved in the database.
     * @param {PromocionCreateManyAndReturnArgs} args - Arguments to create many Promocions.
     * @example
     * // Create many Promocions
     * const promocion = await prisma.promocion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promocions and only return the `id`
     * const promocionWithIdOnly = await prisma.promocion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromocionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromocionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promocion.
     * @param {PromocionDeleteArgs} args - Arguments to delete one Promocion.
     * @example
     * // Delete one Promocion
     * const Promocion = await prisma.promocion.delete({
     *   where: {
     *     // ... filter to delete one Promocion
     *   }
     * })
     * 
     */
    delete<T extends PromocionDeleteArgs>(args: SelectSubset<T, PromocionDeleteArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promocion.
     * @param {PromocionUpdateArgs} args - Arguments to update one Promocion.
     * @example
     * // Update one Promocion
     * const promocion = await prisma.promocion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromocionUpdateArgs>(args: SelectSubset<T, PromocionUpdateArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promocions.
     * @param {PromocionDeleteManyArgs} args - Arguments to filter Promocions to delete.
     * @example
     * // Delete a few Promocions
     * const { count } = await prisma.promocion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromocionDeleteManyArgs>(args?: SelectSubset<T, PromocionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promocions
     * const promocion = await prisma.promocion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromocionUpdateManyArgs>(args: SelectSubset<T, PromocionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocions and returns the data updated in the database.
     * @param {PromocionUpdateManyAndReturnArgs} args - Arguments to update many Promocions.
     * @example
     * // Update many Promocions
     * const promocion = await prisma.promocion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promocions and only return the `id`
     * const promocionWithIdOnly = await prisma.promocion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromocionUpdateManyAndReturnArgs>(args: SelectSubset<T, PromocionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promocion.
     * @param {PromocionUpsertArgs} args - Arguments to update or create a Promocion.
     * @example
     * // Update or create a Promocion
     * const promocion = await prisma.promocion.upsert({
     *   create: {
     *     // ... data to create a Promocion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promocion we want to update
     *   }
     * })
     */
    upsert<T extends PromocionUpsertArgs>(args: SelectSubset<T, PromocionUpsertArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionCountArgs} args - Arguments to filter Promocions to count.
     * @example
     * // Count the number of Promocions
     * const count = await prisma.promocion.count({
     *   where: {
     *     // ... the filter for the Promocions we want to count
     *   }
     * })
    **/
    count<T extends PromocionCountArgs>(
      args?: Subset<T, PromocionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromocionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromocionAggregateArgs>(args: Subset<T, PromocionAggregateArgs>): Prisma.PrismaPromise<GetPromocionAggregateType<T>>

    /**
     * Group by Promocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromocionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromocionGroupByArgs['orderBy'] }
        : { orderBy?: PromocionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromocionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promocion model
   */
  readonly fields: PromocionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promocion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromocionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tienda<T extends TiendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiendaDefaultArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recompensa<T extends Promocion$recompensaArgs<ExtArgs> = {}>(args?: Subset<T, Promocion$recompensaArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acumulaciones<T extends Promocion$acumulacionesArgs<ExtArgs> = {}>(args?: Subset<T, Promocion$acumulacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progresos<T extends Promocion$progresosArgs<ExtArgs> = {}>(args?: Subset<T, Promocion$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promocion model
   */
  interface PromocionFieldRefs {
    readonly id: FieldRef<"Promocion", 'String'>
    readonly idTienda: FieldRef<"Promocion", 'String'>
    readonly idProducto: FieldRef<"Promocion", 'String'>
    readonly nombre: FieldRef<"Promocion", 'String'>
    readonly descripcion: FieldRef<"Promocion", 'String'>
    readonly unidadesObjetivo: FieldRef<"Promocion", 'Int'>
    readonly fechaInicio: FieldRef<"Promocion", 'DateTime'>
    readonly fechaFin: FieldRef<"Promocion", 'DateTime'>
    readonly estado: FieldRef<"Promocion", 'String'>
    readonly createdAt: FieldRef<"Promocion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promocion findUnique
   */
  export type PromocionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion findUniqueOrThrow
   */
  export type PromocionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion findFirst
   */
  export type PromocionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion findFirstOrThrow
   */
  export type PromocionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion findMany
   */
  export type PromocionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocions to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion create
   */
  export type PromocionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promocion.
     */
    data: XOR<PromocionCreateInput, PromocionUncheckedCreateInput>
  }

  /**
   * Promocion createMany
   */
  export type PromocionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promocions.
     */
    data: PromocionCreateManyInput | PromocionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocion createManyAndReturn
   */
  export type PromocionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * The data used to create many Promocions.
     */
    data: PromocionCreateManyInput | PromocionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promocion update
   */
  export type PromocionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promocion.
     */
    data: XOR<PromocionUpdateInput, PromocionUncheckedUpdateInput>
    /**
     * Choose, which Promocion to update.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion updateMany
   */
  export type PromocionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promocions.
     */
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyInput>
    /**
     * Filter which Promocions to update
     */
    where?: PromocionWhereInput
    /**
     * Limit how many Promocions to update.
     */
    limit?: number
  }

  /**
   * Promocion updateManyAndReturn
   */
  export type PromocionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * The data used to update Promocions.
     */
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyInput>
    /**
     * Filter which Promocions to update
     */
    where?: PromocionWhereInput
    /**
     * Limit how many Promocions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promocion upsert
   */
  export type PromocionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promocion to update in case it exists.
     */
    where: PromocionWhereUniqueInput
    /**
     * In case the Promocion found by the `where` argument doesn't exist, create a new Promocion with this data.
     */
    create: XOR<PromocionCreateInput, PromocionUncheckedCreateInput>
    /**
     * In case the Promocion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromocionUpdateInput, PromocionUncheckedUpdateInput>
  }

  /**
   * Promocion delete
   */
  export type PromocionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter which Promocion to delete.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion deleteMany
   */
  export type PromocionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocions to delete
     */
    where?: PromocionWhereInput
    /**
     * Limit how many Promocions to delete.
     */
    limit?: number
  }

  /**
   * Promocion.recompensa
   */
  export type Promocion$recompensaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    where?: RecompensaWhereInput
  }

  /**
   * Promocion.acumulaciones
   */
  export type Promocion$acumulacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    where?: AcumulacionWhereInput
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    cursor?: AcumulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcumulacionScalarFieldEnum | AcumulacionScalarFieldEnum[]
  }

  /**
   * Promocion.progresos
   */
  export type Promocion$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    where?: ProgresoPromocionWhereInput
    orderBy?: ProgresoPromocionOrderByWithRelationInput | ProgresoPromocionOrderByWithRelationInput[]
    cursor?: ProgresoPromocionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoPromocionScalarFieldEnum | ProgresoPromocionScalarFieldEnum[]
  }

  /**
   * Promocion without action
   */
  export type PromocionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
  }


  /**
   * Model Recompensa
   */

  export type AggregateRecompensa = {
    _count: RecompensaCountAggregateOutputType | null
    _avg: RecompensaAvgAggregateOutputType | null
    _sum: RecompensaSumAggregateOutputType | null
    _min: RecompensaMinAggregateOutputType | null
    _max: RecompensaMaxAggregateOutputType | null
  }

  export type RecompensaAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type RecompensaSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type RecompensaMinAggregateOutputType = {
    id: string | null
    idPromocion: string | null
    tipo: string | null
    valor: Decimal | null
    estado: string | null
    createdAt: Date | null
  }

  export type RecompensaMaxAggregateOutputType = {
    id: string | null
    idPromocion: string | null
    tipo: string | null
    valor: Decimal | null
    estado: string | null
    createdAt: Date | null
  }

  export type RecompensaCountAggregateOutputType = {
    id: number
    idPromocion: number
    tipo: number
    valor: number
    estado: number
    createdAt: number
    _all: number
  }


  export type RecompensaAvgAggregateInputType = {
    valor?: true
  }

  export type RecompensaSumAggregateInputType = {
    valor?: true
  }

  export type RecompensaMinAggregateInputType = {
    id?: true
    idPromocion?: true
    tipo?: true
    valor?: true
    estado?: true
    createdAt?: true
  }

  export type RecompensaMaxAggregateInputType = {
    id?: true
    idPromocion?: true
    tipo?: true
    valor?: true
    estado?: true
    createdAt?: true
  }

  export type RecompensaCountAggregateInputType = {
    id?: true
    idPromocion?: true
    tipo?: true
    valor?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type RecompensaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recompensa to aggregate.
     */
    where?: RecompensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recompensas to fetch.
     */
    orderBy?: RecompensaOrderByWithRelationInput | RecompensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecompensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recompensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recompensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recompensas
    **/
    _count?: true | RecompensaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecompensaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecompensaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecompensaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecompensaMaxAggregateInputType
  }

  export type GetRecompensaAggregateType<T extends RecompensaAggregateArgs> = {
        [P in keyof T & keyof AggregateRecompensa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecompensa[P]>
      : GetScalarType<T[P], AggregateRecompensa[P]>
  }




  export type RecompensaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecompensaWhereInput
    orderBy?: RecompensaOrderByWithAggregationInput | RecompensaOrderByWithAggregationInput[]
    by: RecompensaScalarFieldEnum[] | RecompensaScalarFieldEnum
    having?: RecompensaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecompensaCountAggregateInputType | true
    _avg?: RecompensaAvgAggregateInputType
    _sum?: RecompensaSumAggregateInputType
    _min?: RecompensaMinAggregateInputType
    _max?: RecompensaMaxAggregateInputType
  }

  export type RecompensaGroupByOutputType = {
    id: string
    idPromocion: string
    tipo: string
    valor: Decimal | null
    estado: string | null
    createdAt: Date
    _count: RecompensaCountAggregateOutputType | null
    _avg: RecompensaAvgAggregateOutputType | null
    _sum: RecompensaSumAggregateOutputType | null
    _min: RecompensaMinAggregateOutputType | null
    _max: RecompensaMaxAggregateOutputType | null
  }

  type GetRecompensaGroupByPayload<T extends RecompensaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecompensaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecompensaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecompensaGroupByOutputType[P]>
            : GetScalarType<T[P], RecompensaGroupByOutputType[P]>
        }
      >
    >


  export type RecompensaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPromocion?: boolean
    tipo?: boolean
    valor?: boolean
    estado?: boolean
    createdAt?: boolean
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    canjes?: boolean | Recompensa$canjesArgs<ExtArgs>
    _count?: boolean | RecompensaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recompensa"]>

  export type RecompensaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPromocion?: boolean
    tipo?: boolean
    valor?: boolean
    estado?: boolean
    createdAt?: boolean
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recompensa"]>

  export type RecompensaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPromocion?: boolean
    tipo?: boolean
    valor?: boolean
    estado?: boolean
    createdAt?: boolean
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recompensa"]>

  export type RecompensaSelectScalar = {
    id?: boolean
    idPromocion?: boolean
    tipo?: boolean
    valor?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type RecompensaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPromocion" | "tipo" | "valor" | "estado" | "createdAt", ExtArgs["result"]["recompensa"]>
  export type RecompensaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    canjes?: boolean | Recompensa$canjesArgs<ExtArgs>
    _count?: boolean | RecompensaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecompensaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }
  export type RecompensaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }

  export type $RecompensaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recompensa"
    objects: {
      promocion: Prisma.$PromocionPayload<ExtArgs>
      canjes: Prisma.$CanjePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idPromocion: string
      tipo: string
      valor: Prisma.Decimal | null
      estado: string | null
      createdAt: Date
    }, ExtArgs["result"]["recompensa"]>
    composites: {}
  }

  type RecompensaGetPayload<S extends boolean | null | undefined | RecompensaDefaultArgs> = $Result.GetResult<Prisma.$RecompensaPayload, S>

  type RecompensaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecompensaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecompensaCountAggregateInputType | true
    }

  export interface RecompensaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recompensa'], meta: { name: 'Recompensa' } }
    /**
     * Find zero or one Recompensa that matches the filter.
     * @param {RecompensaFindUniqueArgs} args - Arguments to find a Recompensa
     * @example
     * // Get one Recompensa
     * const recompensa = await prisma.recompensa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecompensaFindUniqueArgs>(args: SelectSubset<T, RecompensaFindUniqueArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recompensa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecompensaFindUniqueOrThrowArgs} args - Arguments to find a Recompensa
     * @example
     * // Get one Recompensa
     * const recompensa = await prisma.recompensa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecompensaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecompensaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recompensa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaFindFirstArgs} args - Arguments to find a Recompensa
     * @example
     * // Get one Recompensa
     * const recompensa = await prisma.recompensa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecompensaFindFirstArgs>(args?: SelectSubset<T, RecompensaFindFirstArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recompensa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaFindFirstOrThrowArgs} args - Arguments to find a Recompensa
     * @example
     * // Get one Recompensa
     * const recompensa = await prisma.recompensa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecompensaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecompensaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recompensas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recompensas
     * const recompensas = await prisma.recompensa.findMany()
     * 
     * // Get first 10 Recompensas
     * const recompensas = await prisma.recompensa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recompensaWithIdOnly = await prisma.recompensa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecompensaFindManyArgs>(args?: SelectSubset<T, RecompensaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recompensa.
     * @param {RecompensaCreateArgs} args - Arguments to create a Recompensa.
     * @example
     * // Create one Recompensa
     * const Recompensa = await prisma.recompensa.create({
     *   data: {
     *     // ... data to create a Recompensa
     *   }
     * })
     * 
     */
    create<T extends RecompensaCreateArgs>(args: SelectSubset<T, RecompensaCreateArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recompensas.
     * @param {RecompensaCreateManyArgs} args - Arguments to create many Recompensas.
     * @example
     * // Create many Recompensas
     * const recompensa = await prisma.recompensa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecompensaCreateManyArgs>(args?: SelectSubset<T, RecompensaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recompensas and returns the data saved in the database.
     * @param {RecompensaCreateManyAndReturnArgs} args - Arguments to create many Recompensas.
     * @example
     * // Create many Recompensas
     * const recompensa = await prisma.recompensa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recompensas and only return the `id`
     * const recompensaWithIdOnly = await prisma.recompensa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecompensaCreateManyAndReturnArgs>(args?: SelectSubset<T, RecompensaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recompensa.
     * @param {RecompensaDeleteArgs} args - Arguments to delete one Recompensa.
     * @example
     * // Delete one Recompensa
     * const Recompensa = await prisma.recompensa.delete({
     *   where: {
     *     // ... filter to delete one Recompensa
     *   }
     * })
     * 
     */
    delete<T extends RecompensaDeleteArgs>(args: SelectSubset<T, RecompensaDeleteArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recompensa.
     * @param {RecompensaUpdateArgs} args - Arguments to update one Recompensa.
     * @example
     * // Update one Recompensa
     * const recompensa = await prisma.recompensa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecompensaUpdateArgs>(args: SelectSubset<T, RecompensaUpdateArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recompensas.
     * @param {RecompensaDeleteManyArgs} args - Arguments to filter Recompensas to delete.
     * @example
     * // Delete a few Recompensas
     * const { count } = await prisma.recompensa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecompensaDeleteManyArgs>(args?: SelectSubset<T, RecompensaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recompensas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recompensas
     * const recompensa = await prisma.recompensa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecompensaUpdateManyArgs>(args: SelectSubset<T, RecompensaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recompensas and returns the data updated in the database.
     * @param {RecompensaUpdateManyAndReturnArgs} args - Arguments to update many Recompensas.
     * @example
     * // Update many Recompensas
     * const recompensa = await prisma.recompensa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recompensas and only return the `id`
     * const recompensaWithIdOnly = await prisma.recompensa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecompensaUpdateManyAndReturnArgs>(args: SelectSubset<T, RecompensaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recompensa.
     * @param {RecompensaUpsertArgs} args - Arguments to update or create a Recompensa.
     * @example
     * // Update or create a Recompensa
     * const recompensa = await prisma.recompensa.upsert({
     *   create: {
     *     // ... data to create a Recompensa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recompensa we want to update
     *   }
     * })
     */
    upsert<T extends RecompensaUpsertArgs>(args: SelectSubset<T, RecompensaUpsertArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recompensas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaCountArgs} args - Arguments to filter Recompensas to count.
     * @example
     * // Count the number of Recompensas
     * const count = await prisma.recompensa.count({
     *   where: {
     *     // ... the filter for the Recompensas we want to count
     *   }
     * })
    **/
    count<T extends RecompensaCountArgs>(
      args?: Subset<T, RecompensaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecompensaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recompensa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecompensaAggregateArgs>(args: Subset<T, RecompensaAggregateArgs>): Prisma.PrismaPromise<GetRecompensaAggregateType<T>>

    /**
     * Group by Recompensa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecompensaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecompensaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecompensaGroupByArgs['orderBy'] }
        : { orderBy?: RecompensaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecompensaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecompensaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recompensa model
   */
  readonly fields: RecompensaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recompensa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecompensaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promocion<T extends PromocionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromocionDefaultArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    canjes<T extends Recompensa$canjesArgs<ExtArgs> = {}>(args?: Subset<T, Recompensa$canjesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recompensa model
   */
  interface RecompensaFieldRefs {
    readonly id: FieldRef<"Recompensa", 'String'>
    readonly idPromocion: FieldRef<"Recompensa", 'String'>
    readonly tipo: FieldRef<"Recompensa", 'String'>
    readonly valor: FieldRef<"Recompensa", 'Decimal'>
    readonly estado: FieldRef<"Recompensa", 'String'>
    readonly createdAt: FieldRef<"Recompensa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recompensa findUnique
   */
  export type RecompensaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * Filter, which Recompensa to fetch.
     */
    where: RecompensaWhereUniqueInput
  }

  /**
   * Recompensa findUniqueOrThrow
   */
  export type RecompensaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * Filter, which Recompensa to fetch.
     */
    where: RecompensaWhereUniqueInput
  }

  /**
   * Recompensa findFirst
   */
  export type RecompensaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * Filter, which Recompensa to fetch.
     */
    where?: RecompensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recompensas to fetch.
     */
    orderBy?: RecompensaOrderByWithRelationInput | RecompensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recompensas.
     */
    cursor?: RecompensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recompensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recompensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recompensas.
     */
    distinct?: RecompensaScalarFieldEnum | RecompensaScalarFieldEnum[]
  }

  /**
   * Recompensa findFirstOrThrow
   */
  export type RecompensaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * Filter, which Recompensa to fetch.
     */
    where?: RecompensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recompensas to fetch.
     */
    orderBy?: RecompensaOrderByWithRelationInput | RecompensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recompensas.
     */
    cursor?: RecompensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recompensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recompensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recompensas.
     */
    distinct?: RecompensaScalarFieldEnum | RecompensaScalarFieldEnum[]
  }

  /**
   * Recompensa findMany
   */
  export type RecompensaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * Filter, which Recompensas to fetch.
     */
    where?: RecompensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recompensas to fetch.
     */
    orderBy?: RecompensaOrderByWithRelationInput | RecompensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recompensas.
     */
    cursor?: RecompensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recompensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recompensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recompensas.
     */
    distinct?: RecompensaScalarFieldEnum | RecompensaScalarFieldEnum[]
  }

  /**
   * Recompensa create
   */
  export type RecompensaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * The data needed to create a Recompensa.
     */
    data: XOR<RecompensaCreateInput, RecompensaUncheckedCreateInput>
  }

  /**
   * Recompensa createMany
   */
  export type RecompensaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recompensas.
     */
    data: RecompensaCreateManyInput | RecompensaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recompensa createManyAndReturn
   */
  export type RecompensaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * The data used to create many Recompensas.
     */
    data: RecompensaCreateManyInput | RecompensaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recompensa update
   */
  export type RecompensaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * The data needed to update a Recompensa.
     */
    data: XOR<RecompensaUpdateInput, RecompensaUncheckedUpdateInput>
    /**
     * Choose, which Recompensa to update.
     */
    where: RecompensaWhereUniqueInput
  }

  /**
   * Recompensa updateMany
   */
  export type RecompensaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recompensas.
     */
    data: XOR<RecompensaUpdateManyMutationInput, RecompensaUncheckedUpdateManyInput>
    /**
     * Filter which Recompensas to update
     */
    where?: RecompensaWhereInput
    /**
     * Limit how many Recompensas to update.
     */
    limit?: number
  }

  /**
   * Recompensa updateManyAndReturn
   */
  export type RecompensaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * The data used to update Recompensas.
     */
    data: XOR<RecompensaUpdateManyMutationInput, RecompensaUncheckedUpdateManyInput>
    /**
     * Filter which Recompensas to update
     */
    where?: RecompensaWhereInput
    /**
     * Limit how many Recompensas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recompensa upsert
   */
  export type RecompensaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * The filter to search for the Recompensa to update in case it exists.
     */
    where: RecompensaWhereUniqueInput
    /**
     * In case the Recompensa found by the `where` argument doesn't exist, create a new Recompensa with this data.
     */
    create: XOR<RecompensaCreateInput, RecompensaUncheckedCreateInput>
    /**
     * In case the Recompensa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecompensaUpdateInput, RecompensaUncheckedUpdateInput>
  }

  /**
   * Recompensa delete
   */
  export type RecompensaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
    /**
     * Filter which Recompensa to delete.
     */
    where: RecompensaWhereUniqueInput
  }

  /**
   * Recompensa deleteMany
   */
  export type RecompensaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recompensas to delete
     */
    where?: RecompensaWhereInput
    /**
     * Limit how many Recompensas to delete.
     */
    limit?: number
  }

  /**
   * Recompensa.canjes
   */
  export type Recompensa$canjesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    where?: CanjeWhereInput
    orderBy?: CanjeOrderByWithRelationInput | CanjeOrderByWithRelationInput[]
    cursor?: CanjeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CanjeScalarFieldEnum | CanjeScalarFieldEnum[]
  }

  /**
   * Recompensa without action
   */
  export type RecompensaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recompensa
     */
    select?: RecompensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recompensa
     */
    omit?: RecompensaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecompensaInclude<ExtArgs> | null
  }


  /**
   * Model Qr
   */

  export type AggregateQr = {
    _count: QrCountAggregateOutputType | null
    _min: QrMinAggregateOutputType | null
    _max: QrMaxAggregateOutputType | null
  }

  export type QrMinAggregateOutputType = {
    id: string | null
    idTienda: string | null
    idCliente: string | null
    status: string | null
    fechaCreacion: Date | null
    fechaExpiracion: Date | null
  }

  export type QrMaxAggregateOutputType = {
    id: string | null
    idTienda: string | null
    idCliente: string | null
    status: string | null
    fechaCreacion: Date | null
    fechaExpiracion: Date | null
  }

  export type QrCountAggregateOutputType = {
    id: number
    idTienda: number
    idCliente: number
    status: number
    fechaCreacion: number
    fechaExpiracion: number
    _all: number
  }


  export type QrMinAggregateInputType = {
    id?: true
    idTienda?: true
    idCliente?: true
    status?: true
    fechaCreacion?: true
    fechaExpiracion?: true
  }

  export type QrMaxAggregateInputType = {
    id?: true
    idTienda?: true
    idCliente?: true
    status?: true
    fechaCreacion?: true
    fechaExpiracion?: true
  }

  export type QrCountAggregateInputType = {
    id?: true
    idTienda?: true
    idCliente?: true
    status?: true
    fechaCreacion?: true
    fechaExpiracion?: true
    _all?: true
  }

  export type QrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qr to aggregate.
     */
    where?: QrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qrs to fetch.
     */
    orderBy?: QrOrderByWithRelationInput | QrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qrs
    **/
    _count?: true | QrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QrMaxAggregateInputType
  }

  export type GetQrAggregateType<T extends QrAggregateArgs> = {
        [P in keyof T & keyof AggregateQr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQr[P]>
      : GetScalarType<T[P], AggregateQr[P]>
  }




  export type QrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrWhereInput
    orderBy?: QrOrderByWithAggregationInput | QrOrderByWithAggregationInput[]
    by: QrScalarFieldEnum[] | QrScalarFieldEnum
    having?: QrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QrCountAggregateInputType | true
    _min?: QrMinAggregateInputType
    _max?: QrMaxAggregateInputType
  }

  export type QrGroupByOutputType = {
    id: string
    idTienda: string
    idCliente: string
    status: string | null
    fechaCreacion: Date
    fechaExpiracion: Date
    _count: QrCountAggregateOutputType | null
    _min: QrMinAggregateOutputType | null
    _max: QrMaxAggregateOutputType | null
  }

  type GetQrGroupByPayload<T extends QrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QrGroupByOutputType[P]>
            : GetScalarType<T[P], QrGroupByOutputType[P]>
        }
      >
    >


  export type QrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idCliente?: boolean
    status?: boolean
    fechaCreacion?: boolean
    fechaExpiracion?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    acumulaciones?: boolean | Qr$acumulacionesArgs<ExtArgs>
    _count?: boolean | QrCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qr"]>

  export type QrSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idCliente?: boolean
    status?: boolean
    fechaCreacion?: boolean
    fechaExpiracion?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qr"]>

  export type QrSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTienda?: boolean
    idCliente?: boolean
    status?: boolean
    fechaCreacion?: boolean
    fechaExpiracion?: boolean
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qr"]>

  export type QrSelectScalar = {
    id?: boolean
    idTienda?: boolean
    idCliente?: boolean
    status?: boolean
    fechaCreacion?: boolean
    fechaExpiracion?: boolean
  }

  export type QrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTienda" | "idCliente" | "status" | "fechaCreacion" | "fechaExpiracion", ExtArgs["result"]["qr"]>
  export type QrInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    acumulaciones?: boolean | Qr$acumulacionesArgs<ExtArgs>
    _count?: boolean | QrCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QrIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type QrIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tienda?: boolean | TiendaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $QrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Qr"
    objects: {
      tienda: Prisma.$TiendaPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      acumulaciones: Prisma.$AcumulacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idTienda: string
      idCliente: string
      status: string | null
      fechaCreacion: Date
      fechaExpiracion: Date
    }, ExtArgs["result"]["qr"]>
    composites: {}
  }

  type QrGetPayload<S extends boolean | null | undefined | QrDefaultArgs> = $Result.GetResult<Prisma.$QrPayload, S>

  type QrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QrCountAggregateInputType | true
    }

  export interface QrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Qr'], meta: { name: 'Qr' } }
    /**
     * Find zero or one Qr that matches the filter.
     * @param {QrFindUniqueArgs} args - Arguments to find a Qr
     * @example
     * // Get one Qr
     * const qr = await prisma.qr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QrFindUniqueArgs>(args: SelectSubset<T, QrFindUniqueArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QrFindUniqueOrThrowArgs} args - Arguments to find a Qr
     * @example
     * // Get one Qr
     * const qr = await prisma.qr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QrFindUniqueOrThrowArgs>(args: SelectSubset<T, QrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrFindFirstArgs} args - Arguments to find a Qr
     * @example
     * // Get one Qr
     * const qr = await prisma.qr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QrFindFirstArgs>(args?: SelectSubset<T, QrFindFirstArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrFindFirstOrThrowArgs} args - Arguments to find a Qr
     * @example
     * // Get one Qr
     * const qr = await prisma.qr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QrFindFirstOrThrowArgs>(args?: SelectSubset<T, QrFindFirstOrThrowArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qrs
     * const qrs = await prisma.qr.findMany()
     * 
     * // Get first 10 Qrs
     * const qrs = await prisma.qr.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qrWithIdOnly = await prisma.qr.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QrFindManyArgs>(args?: SelectSubset<T, QrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qr.
     * @param {QrCreateArgs} args - Arguments to create a Qr.
     * @example
     * // Create one Qr
     * const Qr = await prisma.qr.create({
     *   data: {
     *     // ... data to create a Qr
     *   }
     * })
     * 
     */
    create<T extends QrCreateArgs>(args: SelectSubset<T, QrCreateArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qrs.
     * @param {QrCreateManyArgs} args - Arguments to create many Qrs.
     * @example
     * // Create many Qrs
     * const qr = await prisma.qr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QrCreateManyArgs>(args?: SelectSubset<T, QrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Qrs and returns the data saved in the database.
     * @param {QrCreateManyAndReturnArgs} args - Arguments to create many Qrs.
     * @example
     * // Create many Qrs
     * const qr = await prisma.qr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Qrs and only return the `id`
     * const qrWithIdOnly = await prisma.qr.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QrCreateManyAndReturnArgs>(args?: SelectSubset<T, QrCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Qr.
     * @param {QrDeleteArgs} args - Arguments to delete one Qr.
     * @example
     * // Delete one Qr
     * const Qr = await prisma.qr.delete({
     *   where: {
     *     // ... filter to delete one Qr
     *   }
     * })
     * 
     */
    delete<T extends QrDeleteArgs>(args: SelectSubset<T, QrDeleteArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qr.
     * @param {QrUpdateArgs} args - Arguments to update one Qr.
     * @example
     * // Update one Qr
     * const qr = await prisma.qr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QrUpdateArgs>(args: SelectSubset<T, QrUpdateArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qrs.
     * @param {QrDeleteManyArgs} args - Arguments to filter Qrs to delete.
     * @example
     * // Delete a few Qrs
     * const { count } = await prisma.qr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QrDeleteManyArgs>(args?: SelectSubset<T, QrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qrs
     * const qr = await prisma.qr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QrUpdateManyArgs>(args: SelectSubset<T, QrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qrs and returns the data updated in the database.
     * @param {QrUpdateManyAndReturnArgs} args - Arguments to update many Qrs.
     * @example
     * // Update many Qrs
     * const qr = await prisma.qr.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Qrs and only return the `id`
     * const qrWithIdOnly = await prisma.qr.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QrUpdateManyAndReturnArgs>(args: SelectSubset<T, QrUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Qr.
     * @param {QrUpsertArgs} args - Arguments to update or create a Qr.
     * @example
     * // Update or create a Qr
     * const qr = await prisma.qr.upsert({
     *   create: {
     *     // ... data to create a Qr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qr we want to update
     *   }
     * })
     */
    upsert<T extends QrUpsertArgs>(args: SelectSubset<T, QrUpsertArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCountArgs} args - Arguments to filter Qrs to count.
     * @example
     * // Count the number of Qrs
     * const count = await prisma.qr.count({
     *   where: {
     *     // ... the filter for the Qrs we want to count
     *   }
     * })
    **/
    count<T extends QrCountArgs>(
      args?: Subset<T, QrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QrAggregateArgs>(args: Subset<T, QrAggregateArgs>): Prisma.PrismaPromise<GetQrAggregateType<T>>

    /**
     * Group by Qr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QrGroupByArgs['orderBy'] }
        : { orderBy?: QrGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Qr model
   */
  readonly fields: QrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tienda<T extends TiendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiendaDefaultArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acumulaciones<T extends Qr$acumulacionesArgs<ExtArgs> = {}>(args?: Subset<T, Qr$acumulacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Qr model
   */
  interface QrFieldRefs {
    readonly id: FieldRef<"Qr", 'String'>
    readonly idTienda: FieldRef<"Qr", 'String'>
    readonly idCliente: FieldRef<"Qr", 'String'>
    readonly status: FieldRef<"Qr", 'String'>
    readonly fechaCreacion: FieldRef<"Qr", 'DateTime'>
    readonly fechaExpiracion: FieldRef<"Qr", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Qr findUnique
   */
  export type QrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * Filter, which Qr to fetch.
     */
    where: QrWhereUniqueInput
  }

  /**
   * Qr findUniqueOrThrow
   */
  export type QrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * Filter, which Qr to fetch.
     */
    where: QrWhereUniqueInput
  }

  /**
   * Qr findFirst
   */
  export type QrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * Filter, which Qr to fetch.
     */
    where?: QrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qrs to fetch.
     */
    orderBy?: QrOrderByWithRelationInput | QrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qrs.
     */
    cursor?: QrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qrs.
     */
    distinct?: QrScalarFieldEnum | QrScalarFieldEnum[]
  }

  /**
   * Qr findFirstOrThrow
   */
  export type QrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * Filter, which Qr to fetch.
     */
    where?: QrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qrs to fetch.
     */
    orderBy?: QrOrderByWithRelationInput | QrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qrs.
     */
    cursor?: QrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qrs.
     */
    distinct?: QrScalarFieldEnum | QrScalarFieldEnum[]
  }

  /**
   * Qr findMany
   */
  export type QrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * Filter, which Qrs to fetch.
     */
    where?: QrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qrs to fetch.
     */
    orderBy?: QrOrderByWithRelationInput | QrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qrs.
     */
    cursor?: QrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qrs.
     */
    distinct?: QrScalarFieldEnum | QrScalarFieldEnum[]
  }

  /**
   * Qr create
   */
  export type QrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * The data needed to create a Qr.
     */
    data: XOR<QrCreateInput, QrUncheckedCreateInput>
  }

  /**
   * Qr createMany
   */
  export type QrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Qrs.
     */
    data: QrCreateManyInput | QrCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Qr createManyAndReturn
   */
  export type QrCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * The data used to create many Qrs.
     */
    data: QrCreateManyInput | QrCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Qr update
   */
  export type QrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * The data needed to update a Qr.
     */
    data: XOR<QrUpdateInput, QrUncheckedUpdateInput>
    /**
     * Choose, which Qr to update.
     */
    where: QrWhereUniqueInput
  }

  /**
   * Qr updateMany
   */
  export type QrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Qrs.
     */
    data: XOR<QrUpdateManyMutationInput, QrUncheckedUpdateManyInput>
    /**
     * Filter which Qrs to update
     */
    where?: QrWhereInput
    /**
     * Limit how many Qrs to update.
     */
    limit?: number
  }

  /**
   * Qr updateManyAndReturn
   */
  export type QrUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * The data used to update Qrs.
     */
    data: XOR<QrUpdateManyMutationInput, QrUncheckedUpdateManyInput>
    /**
     * Filter which Qrs to update
     */
    where?: QrWhereInput
    /**
     * Limit how many Qrs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Qr upsert
   */
  export type QrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * The filter to search for the Qr to update in case it exists.
     */
    where: QrWhereUniqueInput
    /**
     * In case the Qr found by the `where` argument doesn't exist, create a new Qr with this data.
     */
    create: XOR<QrCreateInput, QrUncheckedCreateInput>
    /**
     * In case the Qr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QrUpdateInput, QrUncheckedUpdateInput>
  }

  /**
   * Qr delete
   */
  export type QrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    /**
     * Filter which Qr to delete.
     */
    where: QrWhereUniqueInput
  }

  /**
   * Qr deleteMany
   */
  export type QrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qrs to delete
     */
    where?: QrWhereInput
    /**
     * Limit how many Qrs to delete.
     */
    limit?: number
  }

  /**
   * Qr.acumulaciones
   */
  export type Qr$acumulacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    where?: AcumulacionWhereInput
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    cursor?: AcumulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcumulacionScalarFieldEnum | AcumulacionScalarFieldEnum[]
  }

  /**
   * Qr without action
   */
  export type QrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
  }


  /**
   * Model Acumulacion
   */

  export type AggregateAcumulacion = {
    _count: AcumulacionCountAggregateOutputType | null
    _avg: AcumulacionAvgAggregateOutputType | null
    _sum: AcumulacionSumAggregateOutputType | null
    _min: AcumulacionMinAggregateOutputType | null
    _max: AcumulacionMaxAggregateOutputType | null
  }

  export type AcumulacionAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type AcumulacionSumAggregateOutputType = {
    cantidad: number | null
  }

  export type AcumulacionMinAggregateOutputType = {
    id: string | null
    idCliente: string | null
    idPromocion: string | null
    idQR: string | null
    cantidad: number | null
    fecha: Date | null
  }

  export type AcumulacionMaxAggregateOutputType = {
    id: string | null
    idCliente: string | null
    idPromocion: string | null
    idQR: string | null
    cantidad: number | null
    fecha: Date | null
  }

  export type AcumulacionCountAggregateOutputType = {
    id: number
    idCliente: number
    idPromocion: number
    idQR: number
    cantidad: number
    fecha: number
    _all: number
  }


  export type AcumulacionAvgAggregateInputType = {
    cantidad?: true
  }

  export type AcumulacionSumAggregateInputType = {
    cantidad?: true
  }

  export type AcumulacionMinAggregateInputType = {
    id?: true
    idCliente?: true
    idPromocion?: true
    idQR?: true
    cantidad?: true
    fecha?: true
  }

  export type AcumulacionMaxAggregateInputType = {
    id?: true
    idCliente?: true
    idPromocion?: true
    idQR?: true
    cantidad?: true
    fecha?: true
  }

  export type AcumulacionCountAggregateInputType = {
    id?: true
    idCliente?: true
    idPromocion?: true
    idQR?: true
    cantidad?: true
    fecha?: true
    _all?: true
  }

  export type AcumulacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acumulacion to aggregate.
     */
    where?: AcumulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acumulacions to fetch.
     */
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcumulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acumulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acumulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acumulacions
    **/
    _count?: true | AcumulacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcumulacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcumulacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcumulacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcumulacionMaxAggregateInputType
  }

  export type GetAcumulacionAggregateType<T extends AcumulacionAggregateArgs> = {
        [P in keyof T & keyof AggregateAcumulacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcumulacion[P]>
      : GetScalarType<T[P], AggregateAcumulacion[P]>
  }




  export type AcumulacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcumulacionWhereInput
    orderBy?: AcumulacionOrderByWithAggregationInput | AcumulacionOrderByWithAggregationInput[]
    by: AcumulacionScalarFieldEnum[] | AcumulacionScalarFieldEnum
    having?: AcumulacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcumulacionCountAggregateInputType | true
    _avg?: AcumulacionAvgAggregateInputType
    _sum?: AcumulacionSumAggregateInputType
    _min?: AcumulacionMinAggregateInputType
    _max?: AcumulacionMaxAggregateInputType
  }

  export type AcumulacionGroupByOutputType = {
    id: string
    idCliente: string
    idPromocion: string
    idQR: string | null
    cantidad: number
    fecha: Date
    _count: AcumulacionCountAggregateOutputType | null
    _avg: AcumulacionAvgAggregateOutputType | null
    _sum: AcumulacionSumAggregateOutputType | null
    _min: AcumulacionMinAggregateOutputType | null
    _max: AcumulacionMaxAggregateOutputType | null
  }

  type GetAcumulacionGroupByPayload<T extends AcumulacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcumulacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcumulacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcumulacionGroupByOutputType[P]>
            : GetScalarType<T[P], AcumulacionGroupByOutputType[P]>
        }
      >
    >


  export type AcumulacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idPromocion?: boolean
    idQR?: boolean
    cantidad?: boolean
    fecha?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    qr?: boolean | Acumulacion$qrArgs<ExtArgs>
  }, ExtArgs["result"]["acumulacion"]>

  export type AcumulacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idPromocion?: boolean
    idQR?: boolean
    cantidad?: boolean
    fecha?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    qr?: boolean | Acumulacion$qrArgs<ExtArgs>
  }, ExtArgs["result"]["acumulacion"]>

  export type AcumulacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idPromocion?: boolean
    idQR?: boolean
    cantidad?: boolean
    fecha?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    qr?: boolean | Acumulacion$qrArgs<ExtArgs>
  }, ExtArgs["result"]["acumulacion"]>

  export type AcumulacionSelectScalar = {
    id?: boolean
    idCliente?: boolean
    idPromocion?: boolean
    idQR?: boolean
    cantidad?: boolean
    fecha?: boolean
  }

  export type AcumulacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCliente" | "idPromocion" | "idQR" | "cantidad" | "fecha", ExtArgs["result"]["acumulacion"]>
  export type AcumulacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    qr?: boolean | Acumulacion$qrArgs<ExtArgs>
  }
  export type AcumulacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    qr?: boolean | Acumulacion$qrArgs<ExtArgs>
  }
  export type AcumulacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
    qr?: boolean | Acumulacion$qrArgs<ExtArgs>
  }

  export type $AcumulacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acumulacion"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      promocion: Prisma.$PromocionPayload<ExtArgs>
      qr: Prisma.$QrPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idCliente: string
      idPromocion: string
      idQR: string | null
      cantidad: number
      fecha: Date
    }, ExtArgs["result"]["acumulacion"]>
    composites: {}
  }

  type AcumulacionGetPayload<S extends boolean | null | undefined | AcumulacionDefaultArgs> = $Result.GetResult<Prisma.$AcumulacionPayload, S>

  type AcumulacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcumulacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcumulacionCountAggregateInputType | true
    }

  export interface AcumulacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acumulacion'], meta: { name: 'Acumulacion' } }
    /**
     * Find zero or one Acumulacion that matches the filter.
     * @param {AcumulacionFindUniqueArgs} args - Arguments to find a Acumulacion
     * @example
     * // Get one Acumulacion
     * const acumulacion = await prisma.acumulacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcumulacionFindUniqueArgs>(args: SelectSubset<T, AcumulacionFindUniqueArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acumulacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcumulacionFindUniqueOrThrowArgs} args - Arguments to find a Acumulacion
     * @example
     * // Get one Acumulacion
     * const acumulacion = await prisma.acumulacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcumulacionFindUniqueOrThrowArgs>(args: SelectSubset<T, AcumulacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acumulacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionFindFirstArgs} args - Arguments to find a Acumulacion
     * @example
     * // Get one Acumulacion
     * const acumulacion = await prisma.acumulacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcumulacionFindFirstArgs>(args?: SelectSubset<T, AcumulacionFindFirstArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acumulacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionFindFirstOrThrowArgs} args - Arguments to find a Acumulacion
     * @example
     * // Get one Acumulacion
     * const acumulacion = await prisma.acumulacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcumulacionFindFirstOrThrowArgs>(args?: SelectSubset<T, AcumulacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acumulacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acumulacions
     * const acumulacions = await prisma.acumulacion.findMany()
     * 
     * // Get first 10 Acumulacions
     * const acumulacions = await prisma.acumulacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acumulacionWithIdOnly = await prisma.acumulacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcumulacionFindManyArgs>(args?: SelectSubset<T, AcumulacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acumulacion.
     * @param {AcumulacionCreateArgs} args - Arguments to create a Acumulacion.
     * @example
     * // Create one Acumulacion
     * const Acumulacion = await prisma.acumulacion.create({
     *   data: {
     *     // ... data to create a Acumulacion
     *   }
     * })
     * 
     */
    create<T extends AcumulacionCreateArgs>(args: SelectSubset<T, AcumulacionCreateArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acumulacions.
     * @param {AcumulacionCreateManyArgs} args - Arguments to create many Acumulacions.
     * @example
     * // Create many Acumulacions
     * const acumulacion = await prisma.acumulacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcumulacionCreateManyArgs>(args?: SelectSubset<T, AcumulacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acumulacions and returns the data saved in the database.
     * @param {AcumulacionCreateManyAndReturnArgs} args - Arguments to create many Acumulacions.
     * @example
     * // Create many Acumulacions
     * const acumulacion = await prisma.acumulacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acumulacions and only return the `id`
     * const acumulacionWithIdOnly = await prisma.acumulacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcumulacionCreateManyAndReturnArgs>(args?: SelectSubset<T, AcumulacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Acumulacion.
     * @param {AcumulacionDeleteArgs} args - Arguments to delete one Acumulacion.
     * @example
     * // Delete one Acumulacion
     * const Acumulacion = await prisma.acumulacion.delete({
     *   where: {
     *     // ... filter to delete one Acumulacion
     *   }
     * })
     * 
     */
    delete<T extends AcumulacionDeleteArgs>(args: SelectSubset<T, AcumulacionDeleteArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acumulacion.
     * @param {AcumulacionUpdateArgs} args - Arguments to update one Acumulacion.
     * @example
     * // Update one Acumulacion
     * const acumulacion = await prisma.acumulacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcumulacionUpdateArgs>(args: SelectSubset<T, AcumulacionUpdateArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acumulacions.
     * @param {AcumulacionDeleteManyArgs} args - Arguments to filter Acumulacions to delete.
     * @example
     * // Delete a few Acumulacions
     * const { count } = await prisma.acumulacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcumulacionDeleteManyArgs>(args?: SelectSubset<T, AcumulacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acumulacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acumulacions
     * const acumulacion = await prisma.acumulacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcumulacionUpdateManyArgs>(args: SelectSubset<T, AcumulacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acumulacions and returns the data updated in the database.
     * @param {AcumulacionUpdateManyAndReturnArgs} args - Arguments to update many Acumulacions.
     * @example
     * // Update many Acumulacions
     * const acumulacion = await prisma.acumulacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Acumulacions and only return the `id`
     * const acumulacionWithIdOnly = await prisma.acumulacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcumulacionUpdateManyAndReturnArgs>(args: SelectSubset<T, AcumulacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Acumulacion.
     * @param {AcumulacionUpsertArgs} args - Arguments to update or create a Acumulacion.
     * @example
     * // Update or create a Acumulacion
     * const acumulacion = await prisma.acumulacion.upsert({
     *   create: {
     *     // ... data to create a Acumulacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acumulacion we want to update
     *   }
     * })
     */
    upsert<T extends AcumulacionUpsertArgs>(args: SelectSubset<T, AcumulacionUpsertArgs<ExtArgs>>): Prisma__AcumulacionClient<$Result.GetResult<Prisma.$AcumulacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acumulacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionCountArgs} args - Arguments to filter Acumulacions to count.
     * @example
     * // Count the number of Acumulacions
     * const count = await prisma.acumulacion.count({
     *   where: {
     *     // ... the filter for the Acumulacions we want to count
     *   }
     * })
    **/
    count<T extends AcumulacionCountArgs>(
      args?: Subset<T, AcumulacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcumulacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acumulacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcumulacionAggregateArgs>(args: Subset<T, AcumulacionAggregateArgs>): Prisma.PrismaPromise<GetAcumulacionAggregateType<T>>

    /**
     * Group by Acumulacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcumulacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcumulacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcumulacionGroupByArgs['orderBy'] }
        : { orderBy?: AcumulacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcumulacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcumulacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acumulacion model
   */
  readonly fields: AcumulacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acumulacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcumulacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promocion<T extends PromocionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromocionDefaultArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qr<T extends Acumulacion$qrArgs<ExtArgs> = {}>(args?: Subset<T, Acumulacion$qrArgs<ExtArgs>>): Prisma__QrClient<$Result.GetResult<Prisma.$QrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Acumulacion model
   */
  interface AcumulacionFieldRefs {
    readonly id: FieldRef<"Acumulacion", 'String'>
    readonly idCliente: FieldRef<"Acumulacion", 'String'>
    readonly idPromocion: FieldRef<"Acumulacion", 'String'>
    readonly idQR: FieldRef<"Acumulacion", 'String'>
    readonly cantidad: FieldRef<"Acumulacion", 'Int'>
    readonly fecha: FieldRef<"Acumulacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Acumulacion findUnique
   */
  export type AcumulacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * Filter, which Acumulacion to fetch.
     */
    where: AcumulacionWhereUniqueInput
  }

  /**
   * Acumulacion findUniqueOrThrow
   */
  export type AcumulacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * Filter, which Acumulacion to fetch.
     */
    where: AcumulacionWhereUniqueInput
  }

  /**
   * Acumulacion findFirst
   */
  export type AcumulacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * Filter, which Acumulacion to fetch.
     */
    where?: AcumulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acumulacions to fetch.
     */
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acumulacions.
     */
    cursor?: AcumulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acumulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acumulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acumulacions.
     */
    distinct?: AcumulacionScalarFieldEnum | AcumulacionScalarFieldEnum[]
  }

  /**
   * Acumulacion findFirstOrThrow
   */
  export type AcumulacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * Filter, which Acumulacion to fetch.
     */
    where?: AcumulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acumulacions to fetch.
     */
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acumulacions.
     */
    cursor?: AcumulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acumulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acumulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acumulacions.
     */
    distinct?: AcumulacionScalarFieldEnum | AcumulacionScalarFieldEnum[]
  }

  /**
   * Acumulacion findMany
   */
  export type AcumulacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * Filter, which Acumulacions to fetch.
     */
    where?: AcumulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acumulacions to fetch.
     */
    orderBy?: AcumulacionOrderByWithRelationInput | AcumulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acumulacions.
     */
    cursor?: AcumulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acumulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acumulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acumulacions.
     */
    distinct?: AcumulacionScalarFieldEnum | AcumulacionScalarFieldEnum[]
  }

  /**
   * Acumulacion create
   */
  export type AcumulacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Acumulacion.
     */
    data: XOR<AcumulacionCreateInput, AcumulacionUncheckedCreateInput>
  }

  /**
   * Acumulacion createMany
   */
  export type AcumulacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acumulacions.
     */
    data: AcumulacionCreateManyInput | AcumulacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acumulacion createManyAndReturn
   */
  export type AcumulacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * The data used to create many Acumulacions.
     */
    data: AcumulacionCreateManyInput | AcumulacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Acumulacion update
   */
  export type AcumulacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Acumulacion.
     */
    data: XOR<AcumulacionUpdateInput, AcumulacionUncheckedUpdateInput>
    /**
     * Choose, which Acumulacion to update.
     */
    where: AcumulacionWhereUniqueInput
  }

  /**
   * Acumulacion updateMany
   */
  export type AcumulacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acumulacions.
     */
    data: XOR<AcumulacionUpdateManyMutationInput, AcumulacionUncheckedUpdateManyInput>
    /**
     * Filter which Acumulacions to update
     */
    where?: AcumulacionWhereInput
    /**
     * Limit how many Acumulacions to update.
     */
    limit?: number
  }

  /**
   * Acumulacion updateManyAndReturn
   */
  export type AcumulacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * The data used to update Acumulacions.
     */
    data: XOR<AcumulacionUpdateManyMutationInput, AcumulacionUncheckedUpdateManyInput>
    /**
     * Filter which Acumulacions to update
     */
    where?: AcumulacionWhereInput
    /**
     * Limit how many Acumulacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Acumulacion upsert
   */
  export type AcumulacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Acumulacion to update in case it exists.
     */
    where: AcumulacionWhereUniqueInput
    /**
     * In case the Acumulacion found by the `where` argument doesn't exist, create a new Acumulacion with this data.
     */
    create: XOR<AcumulacionCreateInput, AcumulacionUncheckedCreateInput>
    /**
     * In case the Acumulacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcumulacionUpdateInput, AcumulacionUncheckedUpdateInput>
  }

  /**
   * Acumulacion delete
   */
  export type AcumulacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
    /**
     * Filter which Acumulacion to delete.
     */
    where: AcumulacionWhereUniqueInput
  }

  /**
   * Acumulacion deleteMany
   */
  export type AcumulacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acumulacions to delete
     */
    where?: AcumulacionWhereInput
    /**
     * Limit how many Acumulacions to delete.
     */
    limit?: number
  }

  /**
   * Acumulacion.qr
   */
  export type Acumulacion$qrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qr
     */
    select?: QrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qr
     */
    omit?: QrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrInclude<ExtArgs> | null
    where?: QrWhereInput
  }

  /**
   * Acumulacion without action
   */
  export type AcumulacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acumulacion
     */
    select?: AcumulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acumulacion
     */
    omit?: AcumulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcumulacionInclude<ExtArgs> | null
  }


  /**
   * Model ProgresoPromocion
   */

  export type AggregateProgresoPromocion = {
    _count: ProgresoPromocionCountAggregateOutputType | null
    _avg: ProgresoPromocionAvgAggregateOutputType | null
    _sum: ProgresoPromocionSumAggregateOutputType | null
    _min: ProgresoPromocionMinAggregateOutputType | null
    _max: ProgresoPromocionMaxAggregateOutputType | null
  }

  export type ProgresoPromocionAvgAggregateOutputType = {
    totalAcumulado: number | null
  }

  export type ProgresoPromocionSumAggregateOutputType = {
    totalAcumulado: number | null
  }

  export type ProgresoPromocionMinAggregateOutputType = {
    idCliente: string | null
    idPromocion: string | null
    totalAcumulado: number | null
    ultimaActualizacion: Date | null
  }

  export type ProgresoPromocionMaxAggregateOutputType = {
    idCliente: string | null
    idPromocion: string | null
    totalAcumulado: number | null
    ultimaActualizacion: Date | null
  }

  export type ProgresoPromocionCountAggregateOutputType = {
    idCliente: number
    idPromocion: number
    totalAcumulado: number
    ultimaActualizacion: number
    _all: number
  }


  export type ProgresoPromocionAvgAggregateInputType = {
    totalAcumulado?: true
  }

  export type ProgresoPromocionSumAggregateInputType = {
    totalAcumulado?: true
  }

  export type ProgresoPromocionMinAggregateInputType = {
    idCliente?: true
    idPromocion?: true
    totalAcumulado?: true
    ultimaActualizacion?: true
  }

  export type ProgresoPromocionMaxAggregateInputType = {
    idCliente?: true
    idPromocion?: true
    totalAcumulado?: true
    ultimaActualizacion?: true
  }

  export type ProgresoPromocionCountAggregateInputType = {
    idCliente?: true
    idPromocion?: true
    totalAcumulado?: true
    ultimaActualizacion?: true
    _all?: true
  }

  export type ProgresoPromocionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoPromocion to aggregate.
     */
    where?: ProgresoPromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoPromocions to fetch.
     */
    orderBy?: ProgresoPromocionOrderByWithRelationInput | ProgresoPromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoPromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoPromocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoPromocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgresoPromocions
    **/
    _count?: true | ProgresoPromocionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoPromocionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoPromocionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoPromocionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoPromocionMaxAggregateInputType
  }

  export type GetProgresoPromocionAggregateType<T extends ProgresoPromocionAggregateArgs> = {
        [P in keyof T & keyof AggregateProgresoPromocion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgresoPromocion[P]>
      : GetScalarType<T[P], AggregateProgresoPromocion[P]>
  }




  export type ProgresoPromocionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoPromocionWhereInput
    orderBy?: ProgresoPromocionOrderByWithAggregationInput | ProgresoPromocionOrderByWithAggregationInput[]
    by: ProgresoPromocionScalarFieldEnum[] | ProgresoPromocionScalarFieldEnum
    having?: ProgresoPromocionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoPromocionCountAggregateInputType | true
    _avg?: ProgresoPromocionAvgAggregateInputType
    _sum?: ProgresoPromocionSumAggregateInputType
    _min?: ProgresoPromocionMinAggregateInputType
    _max?: ProgresoPromocionMaxAggregateInputType
  }

  export type ProgresoPromocionGroupByOutputType = {
    idCliente: string
    idPromocion: string
    totalAcumulado: number
    ultimaActualizacion: Date
    _count: ProgresoPromocionCountAggregateOutputType | null
    _avg: ProgresoPromocionAvgAggregateOutputType | null
    _sum: ProgresoPromocionSumAggregateOutputType | null
    _min: ProgresoPromocionMinAggregateOutputType | null
    _max: ProgresoPromocionMaxAggregateOutputType | null
  }

  type GetProgresoPromocionGroupByPayload<T extends ProgresoPromocionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoPromocionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoPromocionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoPromocionGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoPromocionGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoPromocionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idPromocion?: boolean
    totalAcumulado?: boolean
    ultimaActualizacion?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoPromocion"]>

  export type ProgresoPromocionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idPromocion?: boolean
    totalAcumulado?: boolean
    ultimaActualizacion?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoPromocion"]>

  export type ProgresoPromocionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    idPromocion?: boolean
    totalAcumulado?: boolean
    ultimaActualizacion?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoPromocion"]>

  export type ProgresoPromocionSelectScalar = {
    idCliente?: boolean
    idPromocion?: boolean
    totalAcumulado?: boolean
    ultimaActualizacion?: boolean
  }

  export type ProgresoPromocionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCliente" | "idPromocion" | "totalAcumulado" | "ultimaActualizacion", ExtArgs["result"]["progresoPromocion"]>
  export type ProgresoPromocionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }
  export type ProgresoPromocionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }
  export type ProgresoPromocionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    promocion?: boolean | PromocionDefaultArgs<ExtArgs>
  }

  export type $ProgresoPromocionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgresoPromocion"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      promocion: Prisma.$PromocionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCliente: string
      idPromocion: string
      totalAcumulado: number
      ultimaActualizacion: Date
    }, ExtArgs["result"]["progresoPromocion"]>
    composites: {}
  }

  type ProgresoPromocionGetPayload<S extends boolean | null | undefined | ProgresoPromocionDefaultArgs> = $Result.GetResult<Prisma.$ProgresoPromocionPayload, S>

  type ProgresoPromocionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgresoPromocionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoPromocionCountAggregateInputType | true
    }

  export interface ProgresoPromocionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgresoPromocion'], meta: { name: 'ProgresoPromocion' } }
    /**
     * Find zero or one ProgresoPromocion that matches the filter.
     * @param {ProgresoPromocionFindUniqueArgs} args - Arguments to find a ProgresoPromocion
     * @example
     * // Get one ProgresoPromocion
     * const progresoPromocion = await prisma.progresoPromocion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoPromocionFindUniqueArgs>(args: SelectSubset<T, ProgresoPromocionFindUniqueArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgresoPromocion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgresoPromocionFindUniqueOrThrowArgs} args - Arguments to find a ProgresoPromocion
     * @example
     * // Get one ProgresoPromocion
     * const progresoPromocion = await prisma.progresoPromocion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoPromocionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoPromocionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgresoPromocion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionFindFirstArgs} args - Arguments to find a ProgresoPromocion
     * @example
     * // Get one ProgresoPromocion
     * const progresoPromocion = await prisma.progresoPromocion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoPromocionFindFirstArgs>(args?: SelectSubset<T, ProgresoPromocionFindFirstArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgresoPromocion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionFindFirstOrThrowArgs} args - Arguments to find a ProgresoPromocion
     * @example
     * // Get one ProgresoPromocion
     * const progresoPromocion = await prisma.progresoPromocion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoPromocionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoPromocionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgresoPromocions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgresoPromocions
     * const progresoPromocions = await prisma.progresoPromocion.findMany()
     * 
     * // Get first 10 ProgresoPromocions
     * const progresoPromocions = await prisma.progresoPromocion.findMany({ take: 10 })
     * 
     * // Only select the `idCliente`
     * const progresoPromocionWithIdClienteOnly = await prisma.progresoPromocion.findMany({ select: { idCliente: true } })
     * 
     */
    findMany<T extends ProgresoPromocionFindManyArgs>(args?: SelectSubset<T, ProgresoPromocionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgresoPromocion.
     * @param {ProgresoPromocionCreateArgs} args - Arguments to create a ProgresoPromocion.
     * @example
     * // Create one ProgresoPromocion
     * const ProgresoPromocion = await prisma.progresoPromocion.create({
     *   data: {
     *     // ... data to create a ProgresoPromocion
     *   }
     * })
     * 
     */
    create<T extends ProgresoPromocionCreateArgs>(args: SelectSubset<T, ProgresoPromocionCreateArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgresoPromocions.
     * @param {ProgresoPromocionCreateManyArgs} args - Arguments to create many ProgresoPromocions.
     * @example
     * // Create many ProgresoPromocions
     * const progresoPromocion = await prisma.progresoPromocion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoPromocionCreateManyArgs>(args?: SelectSubset<T, ProgresoPromocionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgresoPromocions and returns the data saved in the database.
     * @param {ProgresoPromocionCreateManyAndReturnArgs} args - Arguments to create many ProgresoPromocions.
     * @example
     * // Create many ProgresoPromocions
     * const progresoPromocion = await prisma.progresoPromocion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgresoPromocions and only return the `idCliente`
     * const progresoPromocionWithIdClienteOnly = await prisma.progresoPromocion.createManyAndReturn({
     *   select: { idCliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoPromocionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoPromocionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgresoPromocion.
     * @param {ProgresoPromocionDeleteArgs} args - Arguments to delete one ProgresoPromocion.
     * @example
     * // Delete one ProgresoPromocion
     * const ProgresoPromocion = await prisma.progresoPromocion.delete({
     *   where: {
     *     // ... filter to delete one ProgresoPromocion
     *   }
     * })
     * 
     */
    delete<T extends ProgresoPromocionDeleteArgs>(args: SelectSubset<T, ProgresoPromocionDeleteArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgresoPromocion.
     * @param {ProgresoPromocionUpdateArgs} args - Arguments to update one ProgresoPromocion.
     * @example
     * // Update one ProgresoPromocion
     * const progresoPromocion = await prisma.progresoPromocion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoPromocionUpdateArgs>(args: SelectSubset<T, ProgresoPromocionUpdateArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgresoPromocions.
     * @param {ProgresoPromocionDeleteManyArgs} args - Arguments to filter ProgresoPromocions to delete.
     * @example
     * // Delete a few ProgresoPromocions
     * const { count } = await prisma.progresoPromocion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoPromocionDeleteManyArgs>(args?: SelectSubset<T, ProgresoPromocionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgresoPromocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgresoPromocions
     * const progresoPromocion = await prisma.progresoPromocion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoPromocionUpdateManyArgs>(args: SelectSubset<T, ProgresoPromocionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgresoPromocions and returns the data updated in the database.
     * @param {ProgresoPromocionUpdateManyAndReturnArgs} args - Arguments to update many ProgresoPromocions.
     * @example
     * // Update many ProgresoPromocions
     * const progresoPromocion = await prisma.progresoPromocion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgresoPromocions and only return the `idCliente`
     * const progresoPromocionWithIdClienteOnly = await prisma.progresoPromocion.updateManyAndReturn({
     *   select: { idCliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgresoPromocionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgresoPromocionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgresoPromocion.
     * @param {ProgresoPromocionUpsertArgs} args - Arguments to update or create a ProgresoPromocion.
     * @example
     * // Update or create a ProgresoPromocion
     * const progresoPromocion = await prisma.progresoPromocion.upsert({
     *   create: {
     *     // ... data to create a ProgresoPromocion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgresoPromocion we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoPromocionUpsertArgs>(args: SelectSubset<T, ProgresoPromocionUpsertArgs<ExtArgs>>): Prisma__ProgresoPromocionClient<$Result.GetResult<Prisma.$ProgresoPromocionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgresoPromocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionCountArgs} args - Arguments to filter ProgresoPromocions to count.
     * @example
     * // Count the number of ProgresoPromocions
     * const count = await prisma.progresoPromocion.count({
     *   where: {
     *     // ... the filter for the ProgresoPromocions we want to count
     *   }
     * })
    **/
    count<T extends ProgresoPromocionCountArgs>(
      args?: Subset<T, ProgresoPromocionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoPromocionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgresoPromocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgresoPromocionAggregateArgs>(args: Subset<T, ProgresoPromocionAggregateArgs>): Prisma.PrismaPromise<GetProgresoPromocionAggregateType<T>>

    /**
     * Group by ProgresoPromocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoPromocionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgresoPromocionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoPromocionGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoPromocionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgresoPromocionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoPromocionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgresoPromocion model
   */
  readonly fields: ProgresoPromocionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgresoPromocion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoPromocionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promocion<T extends PromocionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromocionDefaultArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgresoPromocion model
   */
  interface ProgresoPromocionFieldRefs {
    readonly idCliente: FieldRef<"ProgresoPromocion", 'String'>
    readonly idPromocion: FieldRef<"ProgresoPromocion", 'String'>
    readonly totalAcumulado: FieldRef<"ProgresoPromocion", 'Int'>
    readonly ultimaActualizacion: FieldRef<"ProgresoPromocion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgresoPromocion findUnique
   */
  export type ProgresoPromocionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoPromocion to fetch.
     */
    where: ProgresoPromocionWhereUniqueInput
  }

  /**
   * ProgresoPromocion findUniqueOrThrow
   */
  export type ProgresoPromocionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoPromocion to fetch.
     */
    where: ProgresoPromocionWhereUniqueInput
  }

  /**
   * ProgresoPromocion findFirst
   */
  export type ProgresoPromocionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoPromocion to fetch.
     */
    where?: ProgresoPromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoPromocions to fetch.
     */
    orderBy?: ProgresoPromocionOrderByWithRelationInput | ProgresoPromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoPromocions.
     */
    cursor?: ProgresoPromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoPromocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoPromocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoPromocions.
     */
    distinct?: ProgresoPromocionScalarFieldEnum | ProgresoPromocionScalarFieldEnum[]
  }

  /**
   * ProgresoPromocion findFirstOrThrow
   */
  export type ProgresoPromocionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoPromocion to fetch.
     */
    where?: ProgresoPromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoPromocions to fetch.
     */
    orderBy?: ProgresoPromocionOrderByWithRelationInput | ProgresoPromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoPromocions.
     */
    cursor?: ProgresoPromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoPromocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoPromocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoPromocions.
     */
    distinct?: ProgresoPromocionScalarFieldEnum | ProgresoPromocionScalarFieldEnum[]
  }

  /**
   * ProgresoPromocion findMany
   */
  export type ProgresoPromocionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoPromocions to fetch.
     */
    where?: ProgresoPromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoPromocions to fetch.
     */
    orderBy?: ProgresoPromocionOrderByWithRelationInput | ProgresoPromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgresoPromocions.
     */
    cursor?: ProgresoPromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoPromocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoPromocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoPromocions.
     */
    distinct?: ProgresoPromocionScalarFieldEnum | ProgresoPromocionScalarFieldEnum[]
  }

  /**
   * ProgresoPromocion create
   */
  export type ProgresoPromocionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgresoPromocion.
     */
    data: XOR<ProgresoPromocionCreateInput, ProgresoPromocionUncheckedCreateInput>
  }

  /**
   * ProgresoPromocion createMany
   */
  export type ProgresoPromocionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgresoPromocions.
     */
    data: ProgresoPromocionCreateManyInput | ProgresoPromocionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgresoPromocion createManyAndReturn
   */
  export type ProgresoPromocionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * The data used to create many ProgresoPromocions.
     */
    data: ProgresoPromocionCreateManyInput | ProgresoPromocionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgresoPromocion update
   */
  export type ProgresoPromocionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgresoPromocion.
     */
    data: XOR<ProgresoPromocionUpdateInput, ProgresoPromocionUncheckedUpdateInput>
    /**
     * Choose, which ProgresoPromocion to update.
     */
    where: ProgresoPromocionWhereUniqueInput
  }

  /**
   * ProgresoPromocion updateMany
   */
  export type ProgresoPromocionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgresoPromocions.
     */
    data: XOR<ProgresoPromocionUpdateManyMutationInput, ProgresoPromocionUncheckedUpdateManyInput>
    /**
     * Filter which ProgresoPromocions to update
     */
    where?: ProgresoPromocionWhereInput
    /**
     * Limit how many ProgresoPromocions to update.
     */
    limit?: number
  }

  /**
   * ProgresoPromocion updateManyAndReturn
   */
  export type ProgresoPromocionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * The data used to update ProgresoPromocions.
     */
    data: XOR<ProgresoPromocionUpdateManyMutationInput, ProgresoPromocionUncheckedUpdateManyInput>
    /**
     * Filter which ProgresoPromocions to update
     */
    where?: ProgresoPromocionWhereInput
    /**
     * Limit how many ProgresoPromocions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgresoPromocion upsert
   */
  export type ProgresoPromocionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgresoPromocion to update in case it exists.
     */
    where: ProgresoPromocionWhereUniqueInput
    /**
     * In case the ProgresoPromocion found by the `where` argument doesn't exist, create a new ProgresoPromocion with this data.
     */
    create: XOR<ProgresoPromocionCreateInput, ProgresoPromocionUncheckedCreateInput>
    /**
     * In case the ProgresoPromocion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoPromocionUpdateInput, ProgresoPromocionUncheckedUpdateInput>
  }

  /**
   * ProgresoPromocion delete
   */
  export type ProgresoPromocionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
    /**
     * Filter which ProgresoPromocion to delete.
     */
    where: ProgresoPromocionWhereUniqueInput
  }

  /**
   * ProgresoPromocion deleteMany
   */
  export type ProgresoPromocionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoPromocions to delete
     */
    where?: ProgresoPromocionWhereInput
    /**
     * Limit how many ProgresoPromocions to delete.
     */
    limit?: number
  }

  /**
   * ProgresoPromocion without action
   */
  export type ProgresoPromocionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoPromocion
     */
    select?: ProgresoPromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoPromocion
     */
    omit?: ProgresoPromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoPromocionInclude<ExtArgs> | null
  }


  /**
   * Model Canje
   */

  export type AggregateCanje = {
    _count: CanjeCountAggregateOutputType | null
    _min: CanjeMinAggregateOutputType | null
    _max: CanjeMaxAggregateOutputType | null
  }

  export type CanjeMinAggregateOutputType = {
    id: string | null
    idCliente: string | null
    idRecompensa: string | null
    codigo: string | null
    estado: string | null
    fechaGeneracion: Date | null
    fechaExpiracion: Date | null
    fechaUso: Date | null
  }

  export type CanjeMaxAggregateOutputType = {
    id: string | null
    idCliente: string | null
    idRecompensa: string | null
    codigo: string | null
    estado: string | null
    fechaGeneracion: Date | null
    fechaExpiracion: Date | null
    fechaUso: Date | null
  }

  export type CanjeCountAggregateOutputType = {
    id: number
    idCliente: number
    idRecompensa: number
    codigo: number
    estado: number
    fechaGeneracion: number
    fechaExpiracion: number
    fechaUso: number
    _all: number
  }


  export type CanjeMinAggregateInputType = {
    id?: true
    idCliente?: true
    idRecompensa?: true
    codigo?: true
    estado?: true
    fechaGeneracion?: true
    fechaExpiracion?: true
    fechaUso?: true
  }

  export type CanjeMaxAggregateInputType = {
    id?: true
    idCliente?: true
    idRecompensa?: true
    codigo?: true
    estado?: true
    fechaGeneracion?: true
    fechaExpiracion?: true
    fechaUso?: true
  }

  export type CanjeCountAggregateInputType = {
    id?: true
    idCliente?: true
    idRecompensa?: true
    codigo?: true
    estado?: true
    fechaGeneracion?: true
    fechaExpiracion?: true
    fechaUso?: true
    _all?: true
  }

  export type CanjeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Canje to aggregate.
     */
    where?: CanjeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canjes to fetch.
     */
    orderBy?: CanjeOrderByWithRelationInput | CanjeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CanjeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canjes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canjes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Canjes
    **/
    _count?: true | CanjeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanjeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanjeMaxAggregateInputType
  }

  export type GetCanjeAggregateType<T extends CanjeAggregateArgs> = {
        [P in keyof T & keyof AggregateCanje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanje[P]>
      : GetScalarType<T[P], AggregateCanje[P]>
  }




  export type CanjeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanjeWhereInput
    orderBy?: CanjeOrderByWithAggregationInput | CanjeOrderByWithAggregationInput[]
    by: CanjeScalarFieldEnum[] | CanjeScalarFieldEnum
    having?: CanjeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanjeCountAggregateInputType | true
    _min?: CanjeMinAggregateInputType
    _max?: CanjeMaxAggregateInputType
  }

  export type CanjeGroupByOutputType = {
    id: string
    idCliente: string
    idRecompensa: string
    codigo: string
    estado: string | null
    fechaGeneracion: Date
    fechaExpiracion: Date | null
    fechaUso: Date | null
    _count: CanjeCountAggregateOutputType | null
    _min: CanjeMinAggregateOutputType | null
    _max: CanjeMaxAggregateOutputType | null
  }

  type GetCanjeGroupByPayload<T extends CanjeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanjeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanjeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanjeGroupByOutputType[P]>
            : GetScalarType<T[P], CanjeGroupByOutputType[P]>
        }
      >
    >


  export type CanjeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idRecompensa?: boolean
    codigo?: boolean
    estado?: boolean
    fechaGeneracion?: boolean
    fechaExpiracion?: boolean
    fechaUso?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recompensa?: boolean | RecompensaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canje"]>

  export type CanjeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idRecompensa?: boolean
    codigo?: boolean
    estado?: boolean
    fechaGeneracion?: boolean
    fechaExpiracion?: boolean
    fechaUso?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recompensa?: boolean | RecompensaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canje"]>

  export type CanjeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idRecompensa?: boolean
    codigo?: boolean
    estado?: boolean
    fechaGeneracion?: boolean
    fechaExpiracion?: boolean
    fechaUso?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recompensa?: boolean | RecompensaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canje"]>

  export type CanjeSelectScalar = {
    id?: boolean
    idCliente?: boolean
    idRecompensa?: boolean
    codigo?: boolean
    estado?: boolean
    fechaGeneracion?: boolean
    fechaExpiracion?: boolean
    fechaUso?: boolean
  }

  export type CanjeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCliente" | "idRecompensa" | "codigo" | "estado" | "fechaGeneracion" | "fechaExpiracion" | "fechaUso", ExtArgs["result"]["canje"]>
  export type CanjeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recompensa?: boolean | RecompensaDefaultArgs<ExtArgs>
  }
  export type CanjeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recompensa?: boolean | RecompensaDefaultArgs<ExtArgs>
  }
  export type CanjeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recompensa?: boolean | RecompensaDefaultArgs<ExtArgs>
  }

  export type $CanjePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Canje"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      recompensa: Prisma.$RecompensaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idCliente: string
      idRecompensa: string
      codigo: string
      estado: string | null
      fechaGeneracion: Date
      fechaExpiracion: Date | null
      fechaUso: Date | null
    }, ExtArgs["result"]["canje"]>
    composites: {}
  }

  type CanjeGetPayload<S extends boolean | null | undefined | CanjeDefaultArgs> = $Result.GetResult<Prisma.$CanjePayload, S>

  type CanjeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CanjeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanjeCountAggregateInputType | true
    }

  export interface CanjeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Canje'], meta: { name: 'Canje' } }
    /**
     * Find zero or one Canje that matches the filter.
     * @param {CanjeFindUniqueArgs} args - Arguments to find a Canje
     * @example
     * // Get one Canje
     * const canje = await prisma.canje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanjeFindUniqueArgs>(args: SelectSubset<T, CanjeFindUniqueArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Canje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanjeFindUniqueOrThrowArgs} args - Arguments to find a Canje
     * @example
     * // Get one Canje
     * const canje = await prisma.canje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanjeFindUniqueOrThrowArgs>(args: SelectSubset<T, CanjeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Canje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeFindFirstArgs} args - Arguments to find a Canje
     * @example
     * // Get one Canje
     * const canje = await prisma.canje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanjeFindFirstArgs>(args?: SelectSubset<T, CanjeFindFirstArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Canje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeFindFirstOrThrowArgs} args - Arguments to find a Canje
     * @example
     * // Get one Canje
     * const canje = await prisma.canje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanjeFindFirstOrThrowArgs>(args?: SelectSubset<T, CanjeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Canjes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Canjes
     * const canjes = await prisma.canje.findMany()
     * 
     * // Get first 10 Canjes
     * const canjes = await prisma.canje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const canjeWithIdOnly = await prisma.canje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CanjeFindManyArgs>(args?: SelectSubset<T, CanjeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Canje.
     * @param {CanjeCreateArgs} args - Arguments to create a Canje.
     * @example
     * // Create one Canje
     * const Canje = await prisma.canje.create({
     *   data: {
     *     // ... data to create a Canje
     *   }
     * })
     * 
     */
    create<T extends CanjeCreateArgs>(args: SelectSubset<T, CanjeCreateArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Canjes.
     * @param {CanjeCreateManyArgs} args - Arguments to create many Canjes.
     * @example
     * // Create many Canjes
     * const canje = await prisma.canje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CanjeCreateManyArgs>(args?: SelectSubset<T, CanjeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Canjes and returns the data saved in the database.
     * @param {CanjeCreateManyAndReturnArgs} args - Arguments to create many Canjes.
     * @example
     * // Create many Canjes
     * const canje = await prisma.canje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Canjes and only return the `id`
     * const canjeWithIdOnly = await prisma.canje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CanjeCreateManyAndReturnArgs>(args?: SelectSubset<T, CanjeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Canje.
     * @param {CanjeDeleteArgs} args - Arguments to delete one Canje.
     * @example
     * // Delete one Canje
     * const Canje = await prisma.canje.delete({
     *   where: {
     *     // ... filter to delete one Canje
     *   }
     * })
     * 
     */
    delete<T extends CanjeDeleteArgs>(args: SelectSubset<T, CanjeDeleteArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Canje.
     * @param {CanjeUpdateArgs} args - Arguments to update one Canje.
     * @example
     * // Update one Canje
     * const canje = await prisma.canje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CanjeUpdateArgs>(args: SelectSubset<T, CanjeUpdateArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Canjes.
     * @param {CanjeDeleteManyArgs} args - Arguments to filter Canjes to delete.
     * @example
     * // Delete a few Canjes
     * const { count } = await prisma.canje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CanjeDeleteManyArgs>(args?: SelectSubset<T, CanjeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Canjes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Canjes
     * const canje = await prisma.canje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CanjeUpdateManyArgs>(args: SelectSubset<T, CanjeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Canjes and returns the data updated in the database.
     * @param {CanjeUpdateManyAndReturnArgs} args - Arguments to update many Canjes.
     * @example
     * // Update many Canjes
     * const canje = await prisma.canje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Canjes and only return the `id`
     * const canjeWithIdOnly = await prisma.canje.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CanjeUpdateManyAndReturnArgs>(args: SelectSubset<T, CanjeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Canje.
     * @param {CanjeUpsertArgs} args - Arguments to update or create a Canje.
     * @example
     * // Update or create a Canje
     * const canje = await prisma.canje.upsert({
     *   create: {
     *     // ... data to create a Canje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Canje we want to update
     *   }
     * })
     */
    upsert<T extends CanjeUpsertArgs>(args: SelectSubset<T, CanjeUpsertArgs<ExtArgs>>): Prisma__CanjeClient<$Result.GetResult<Prisma.$CanjePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Canjes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeCountArgs} args - Arguments to filter Canjes to count.
     * @example
     * // Count the number of Canjes
     * const count = await prisma.canje.count({
     *   where: {
     *     // ... the filter for the Canjes we want to count
     *   }
     * })
    **/
    count<T extends CanjeCountArgs>(
      args?: Subset<T, CanjeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanjeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Canje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CanjeAggregateArgs>(args: Subset<T, CanjeAggregateArgs>): Prisma.PrismaPromise<GetCanjeAggregateType<T>>

    /**
     * Group by Canje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanjeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CanjeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CanjeGroupByArgs['orderBy'] }
        : { orderBy?: CanjeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CanjeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanjeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Canje model
   */
  readonly fields: CanjeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Canje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CanjeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recompensa<T extends RecompensaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecompensaDefaultArgs<ExtArgs>>): Prisma__RecompensaClient<$Result.GetResult<Prisma.$RecompensaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Canje model
   */
  interface CanjeFieldRefs {
    readonly id: FieldRef<"Canje", 'String'>
    readonly idCliente: FieldRef<"Canje", 'String'>
    readonly idRecompensa: FieldRef<"Canje", 'String'>
    readonly codigo: FieldRef<"Canje", 'String'>
    readonly estado: FieldRef<"Canje", 'String'>
    readonly fechaGeneracion: FieldRef<"Canje", 'DateTime'>
    readonly fechaExpiracion: FieldRef<"Canje", 'DateTime'>
    readonly fechaUso: FieldRef<"Canje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Canje findUnique
   */
  export type CanjeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * Filter, which Canje to fetch.
     */
    where: CanjeWhereUniqueInput
  }

  /**
   * Canje findUniqueOrThrow
   */
  export type CanjeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * Filter, which Canje to fetch.
     */
    where: CanjeWhereUniqueInput
  }

  /**
   * Canje findFirst
   */
  export type CanjeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * Filter, which Canje to fetch.
     */
    where?: CanjeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canjes to fetch.
     */
    orderBy?: CanjeOrderByWithRelationInput | CanjeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Canjes.
     */
    cursor?: CanjeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canjes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canjes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Canjes.
     */
    distinct?: CanjeScalarFieldEnum | CanjeScalarFieldEnum[]
  }

  /**
   * Canje findFirstOrThrow
   */
  export type CanjeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * Filter, which Canje to fetch.
     */
    where?: CanjeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canjes to fetch.
     */
    orderBy?: CanjeOrderByWithRelationInput | CanjeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Canjes.
     */
    cursor?: CanjeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canjes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canjes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Canjes.
     */
    distinct?: CanjeScalarFieldEnum | CanjeScalarFieldEnum[]
  }

  /**
   * Canje findMany
   */
  export type CanjeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * Filter, which Canjes to fetch.
     */
    where?: CanjeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canjes to fetch.
     */
    orderBy?: CanjeOrderByWithRelationInput | CanjeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Canjes.
     */
    cursor?: CanjeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canjes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canjes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Canjes.
     */
    distinct?: CanjeScalarFieldEnum | CanjeScalarFieldEnum[]
  }

  /**
   * Canje create
   */
  export type CanjeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * The data needed to create a Canje.
     */
    data: XOR<CanjeCreateInput, CanjeUncheckedCreateInput>
  }

  /**
   * Canje createMany
   */
  export type CanjeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Canjes.
     */
    data: CanjeCreateManyInput | CanjeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Canje createManyAndReturn
   */
  export type CanjeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * The data used to create many Canjes.
     */
    data: CanjeCreateManyInput | CanjeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Canje update
   */
  export type CanjeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * The data needed to update a Canje.
     */
    data: XOR<CanjeUpdateInput, CanjeUncheckedUpdateInput>
    /**
     * Choose, which Canje to update.
     */
    where: CanjeWhereUniqueInput
  }

  /**
   * Canje updateMany
   */
  export type CanjeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Canjes.
     */
    data: XOR<CanjeUpdateManyMutationInput, CanjeUncheckedUpdateManyInput>
    /**
     * Filter which Canjes to update
     */
    where?: CanjeWhereInput
    /**
     * Limit how many Canjes to update.
     */
    limit?: number
  }

  /**
   * Canje updateManyAndReturn
   */
  export type CanjeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * The data used to update Canjes.
     */
    data: XOR<CanjeUpdateManyMutationInput, CanjeUncheckedUpdateManyInput>
    /**
     * Filter which Canjes to update
     */
    where?: CanjeWhereInput
    /**
     * Limit how many Canjes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Canje upsert
   */
  export type CanjeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * The filter to search for the Canje to update in case it exists.
     */
    where: CanjeWhereUniqueInput
    /**
     * In case the Canje found by the `where` argument doesn't exist, create a new Canje with this data.
     */
    create: XOR<CanjeCreateInput, CanjeUncheckedCreateInput>
    /**
     * In case the Canje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CanjeUpdateInput, CanjeUncheckedUpdateInput>
  }

  /**
   * Canje delete
   */
  export type CanjeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
    /**
     * Filter which Canje to delete.
     */
    where: CanjeWhereUniqueInput
  }

  /**
   * Canje deleteMany
   */
  export type CanjeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Canjes to delete
     */
    where?: CanjeWhereInput
    /**
     * Limit how many Canjes to delete.
     */
    limit?: number
  }

  /**
   * Canje without action
   */
  export type CanjeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canje
     */
    select?: CanjeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Canje
     */
    omit?: CanjeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanjeInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    tipo: string | null
    createdAt: Date | null
    expiresAt: Date | null
    clienteId: string | null
    tiendaId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    tipo: string | null
    createdAt: Date | null
    expiresAt: Date | null
    clienteId: string | null
    tiendaId: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    tipo: number
    createdAt: number
    expiresAt: number
    clienteId: number
    tiendaId: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    createdAt?: true
    expiresAt?: true
    clienteId?: true
    tiendaId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    createdAt?: true
    expiresAt?: true
    clienteId?: true
    tiendaId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    createdAt?: true
    expiresAt?: true
    clienteId?: true
    tiendaId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    token: string
    tipo: string
    createdAt: Date
    expiresAt: Date | null
    clienteId: string | null
    tiendaId: string | null
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    clienteId?: boolean
    tiendaId?: boolean
    cliente?: boolean | Token$clienteArgs<ExtArgs>
    tienda?: boolean | Token$tiendaArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    clienteId?: boolean
    tiendaId?: boolean
    cliente?: boolean | Token$clienteArgs<ExtArgs>
    tienda?: boolean | Token$tiendaArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    clienteId?: boolean
    tiendaId?: boolean
    cliente?: boolean | Token$clienteArgs<ExtArgs>
    tienda?: boolean | Token$tiendaArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    tipo?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    clienteId?: boolean
    tiendaId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "tipo" | "createdAt" | "expiresAt" | "clienteId" | "tiendaId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Token$clienteArgs<ExtArgs>
    tienda?: boolean | Token$tiendaArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Token$clienteArgs<ExtArgs>
    tienda?: boolean | Token$tiendaArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Token$clienteArgs<ExtArgs>
    tienda?: boolean | Token$tiendaArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs> | null
      tienda: Prisma.$TiendaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      tipo: string
      createdAt: Date
      expiresAt: Date | null
      clienteId: string | null
      tiendaId: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends Token$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Token$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tienda<T extends Token$tiendaArgs<ExtArgs> = {}>(args?: Subset<T, Token$tiendaArgs<ExtArgs>>): Prisma__TiendaClient<$Result.GetResult<Prisma.$TiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly tipo: FieldRef<"Token", 'String'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly clienteId: FieldRef<"Token", 'String'>
    readonly tiendaId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.cliente
   */
  export type Token$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Token.tienda
   */
  export type Token$tiendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tienda
     */
    select?: TiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tienda
     */
    omit?: TiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiendaInclude<ExtArgs> | null
    where?: TiendaWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    email: string | null
    tipo: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    email: string | null
    tipo: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    token: number
    email: number
    tipo: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    token?: true
    email?: true
    tipo?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    token?: true
    email?: true
    tipo?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    token?: true
    email?: true
    tipo?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    token: string
    email: string
    tipo: string
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    tipo?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    tipo?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    tipo?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    token?: boolean
    email?: boolean
    tipo?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "email" | "tipo" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      email: string
      tipo: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly tipo: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono',
    fechaNacimiento: 'fechaNacimiento',
    email: 'email',
    password_hash: 'password_hash',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const TiendaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    logo_url: 'logo_url',
    email: 'email',
    password_hash: 'password_hash',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type TiendaScalarFieldEnum = (typeof TiendaScalarFieldEnum)[keyof typeof TiendaScalarFieldEnum]


  export const ClienteTiendaScalarFieldEnum: {
    idCliente: 'idCliente',
    idTienda: 'idTienda',
    fechaRegistro: 'fechaRegistro',
    estado: 'estado'
  };

  export type ClienteTiendaScalarFieldEnum = (typeof ClienteTiendaScalarFieldEnum)[keyof typeof ClienteTiendaScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    idTienda: 'idTienda',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    idTienda: 'idTienda',
    idCategoria: 'idCategoria',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    imagen_url: 'imagen_url',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const PromocionScalarFieldEnum: {
    id: 'id',
    idTienda: 'idTienda',
    idProducto: 'idProducto',
    nombre: 'nombre',
    descripcion: 'descripcion',
    unidadesObjetivo: 'unidadesObjetivo',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type PromocionScalarFieldEnum = (typeof PromocionScalarFieldEnum)[keyof typeof PromocionScalarFieldEnum]


  export const RecompensaScalarFieldEnum: {
    id: 'id',
    idPromocion: 'idPromocion',
    tipo: 'tipo',
    valor: 'valor',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type RecompensaScalarFieldEnum = (typeof RecompensaScalarFieldEnum)[keyof typeof RecompensaScalarFieldEnum]


  export const QrScalarFieldEnum: {
    id: 'id',
    idTienda: 'idTienda',
    idCliente: 'idCliente',
    status: 'status',
    fechaCreacion: 'fechaCreacion',
    fechaExpiracion: 'fechaExpiracion'
  };

  export type QrScalarFieldEnum = (typeof QrScalarFieldEnum)[keyof typeof QrScalarFieldEnum]


  export const AcumulacionScalarFieldEnum: {
    id: 'id',
    idCliente: 'idCliente',
    idPromocion: 'idPromocion',
    idQR: 'idQR',
    cantidad: 'cantidad',
    fecha: 'fecha'
  };

  export type AcumulacionScalarFieldEnum = (typeof AcumulacionScalarFieldEnum)[keyof typeof AcumulacionScalarFieldEnum]


  export const ProgresoPromocionScalarFieldEnum: {
    idCliente: 'idCliente',
    idPromocion: 'idPromocion',
    totalAcumulado: 'totalAcumulado',
    ultimaActualizacion: 'ultimaActualizacion'
  };

  export type ProgresoPromocionScalarFieldEnum = (typeof ProgresoPromocionScalarFieldEnum)[keyof typeof ProgresoPromocionScalarFieldEnum]


  export const CanjeScalarFieldEnum: {
    id: 'id',
    idCliente: 'idCliente',
    idRecompensa: 'idRecompensa',
    codigo: 'codigo',
    estado: 'estado',
    fechaGeneracion: 'fechaGeneracion',
    fechaExpiracion: 'fechaExpiracion',
    fechaUso: 'fechaUso'
  };

  export type CanjeScalarFieldEnum = (typeof CanjeScalarFieldEnum)[keyof typeof CanjeScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    tipo: 'tipo',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    clienteId: 'clienteId',
    tiendaId: 'tiendaId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    email: 'email',
    tipo: 'tipo',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: UuidFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    email?: StringFilter<"Cliente"> | string
    password_hash?: StringFilter<"Cliente"> | string
    estado?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    tiendas?: ClienteTiendaListRelationFilter
    qrs?: QrListRelationFilter
    acumulaciones?: AcumulacionListRelationFilter
    progresos?: ProgresoPromocionListRelationFilter
    canjes?: CanjeListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tiendas?: ClienteTiendaOrderByRelationAggregateInput
    qrs?: QrOrderByRelationAggregateInput
    acumulaciones?: AcumulacionOrderByRelationAggregateInput
    progresos?: ProgresoPromocionOrderByRelationAggregateInput
    canjes?: CanjeOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    password_hash?: StringFilter<"Cliente"> | string
    estado?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    tiendas?: ClienteTiendaListRelationFilter
    qrs?: QrListRelationFilter
    acumulaciones?: AcumulacionListRelationFilter
    progresos?: ProgresoPromocionListRelationFilter
    canjes?: CanjeListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "email">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    apellido?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    email?: StringWithAggregatesFilter<"Cliente"> | string
    password_hash?: StringWithAggregatesFilter<"Cliente"> | string
    estado?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type TiendaWhereInput = {
    AND?: TiendaWhereInput | TiendaWhereInput[]
    OR?: TiendaWhereInput[]
    NOT?: TiendaWhereInput | TiendaWhereInput[]
    id?: UuidFilter<"Tienda"> | string
    nombre?: StringFilter<"Tienda"> | string
    descripcion?: StringNullableFilter<"Tienda"> | string | null
    logo_url?: StringNullableFilter<"Tienda"> | string | null
    email?: StringFilter<"Tienda"> | string
    password_hash?: StringFilter<"Tienda"> | string
    estado?: StringNullableFilter<"Tienda"> | string | null
    createdAt?: DateTimeFilter<"Tienda"> | Date | string
    clientes?: ClienteTiendaListRelationFilter
    categorias?: CategoriaListRelationFilter
    productos?: ProductoListRelationFilter
    promociones?: PromocionListRelationFilter
    qrs?: QrListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type TiendaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientes?: ClienteTiendaOrderByRelationAggregateInput
    categorias?: CategoriaOrderByRelationAggregateInput
    productos?: ProductoOrderByRelationAggregateInput
    promociones?: PromocionOrderByRelationAggregateInput
    qrs?: QrOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type TiendaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TiendaWhereInput | TiendaWhereInput[]
    OR?: TiendaWhereInput[]
    NOT?: TiendaWhereInput | TiendaWhereInput[]
    nombre?: StringFilter<"Tienda"> | string
    descripcion?: StringNullableFilter<"Tienda"> | string | null
    logo_url?: StringNullableFilter<"Tienda"> | string | null
    password_hash?: StringFilter<"Tienda"> | string
    estado?: StringNullableFilter<"Tienda"> | string | null
    createdAt?: DateTimeFilter<"Tienda"> | Date | string
    clientes?: ClienteTiendaListRelationFilter
    categorias?: CategoriaListRelationFilter
    productos?: ProductoListRelationFilter
    promociones?: PromocionListRelationFilter
    qrs?: QrListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "email">

  export type TiendaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TiendaCountOrderByAggregateInput
    _max?: TiendaMaxOrderByAggregateInput
    _min?: TiendaMinOrderByAggregateInput
  }

  export type TiendaScalarWhereWithAggregatesInput = {
    AND?: TiendaScalarWhereWithAggregatesInput | TiendaScalarWhereWithAggregatesInput[]
    OR?: TiendaScalarWhereWithAggregatesInput[]
    NOT?: TiendaScalarWhereWithAggregatesInput | TiendaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tienda"> | string
    nombre?: StringWithAggregatesFilter<"Tienda"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Tienda"> | string | null
    logo_url?: StringNullableWithAggregatesFilter<"Tienda"> | string | null
    email?: StringWithAggregatesFilter<"Tienda"> | string
    password_hash?: StringWithAggregatesFilter<"Tienda"> | string
    estado?: StringNullableWithAggregatesFilter<"Tienda"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tienda"> | Date | string
  }

  export type ClienteTiendaWhereInput = {
    AND?: ClienteTiendaWhereInput | ClienteTiendaWhereInput[]
    OR?: ClienteTiendaWhereInput[]
    NOT?: ClienteTiendaWhereInput | ClienteTiendaWhereInput[]
    idCliente?: UuidFilter<"ClienteTienda"> | string
    idTienda?: UuidFilter<"ClienteTienda"> | string
    fechaRegistro?: DateTimeFilter<"ClienteTienda"> | Date | string
    estado?: StringNullableFilter<"ClienteTienda"> | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
  }

  export type ClienteTiendaOrderByWithRelationInput = {
    idCliente?: SortOrder
    idTienda?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    tienda?: TiendaOrderByWithRelationInput
  }

  export type ClienteTiendaWhereUniqueInput = Prisma.AtLeast<{
    idCliente_idTienda?: ClienteTiendaIdClienteIdTiendaCompoundUniqueInput
    AND?: ClienteTiendaWhereInput | ClienteTiendaWhereInput[]
    OR?: ClienteTiendaWhereInput[]
    NOT?: ClienteTiendaWhereInput | ClienteTiendaWhereInput[]
    idCliente?: UuidFilter<"ClienteTienda"> | string
    idTienda?: UuidFilter<"ClienteTienda"> | string
    fechaRegistro?: DateTimeFilter<"ClienteTienda"> | Date | string
    estado?: StringNullableFilter<"ClienteTienda"> | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
  }, "idCliente_idTienda">

  export type ClienteTiendaOrderByWithAggregationInput = {
    idCliente?: SortOrder
    idTienda?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: ClienteTiendaCountOrderByAggregateInput
    _max?: ClienteTiendaMaxOrderByAggregateInput
    _min?: ClienteTiendaMinOrderByAggregateInput
  }

  export type ClienteTiendaScalarWhereWithAggregatesInput = {
    AND?: ClienteTiendaScalarWhereWithAggregatesInput | ClienteTiendaScalarWhereWithAggregatesInput[]
    OR?: ClienteTiendaScalarWhereWithAggregatesInput[]
    NOT?: ClienteTiendaScalarWhereWithAggregatesInput | ClienteTiendaScalarWhereWithAggregatesInput[]
    idCliente?: UuidWithAggregatesFilter<"ClienteTienda"> | string
    idTienda?: UuidWithAggregatesFilter<"ClienteTienda"> | string
    fechaRegistro?: DateTimeWithAggregatesFilter<"ClienteTienda"> | Date | string
    estado?: StringNullableWithAggregatesFilter<"ClienteTienda"> | string | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: UuidFilter<"Categoria"> | string
    idTienda?: UuidFilter<"Categoria"> | string
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tienda?: TiendaOrderByWithRelationInput
    productos?: ProductoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    idTienda?: UuidFilter<"Categoria"> | string
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    productos?: ProductoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Categoria"> | string
    idTienda?: UuidWithAggregatesFilter<"Categoria"> | string
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: UuidFilter<"Producto"> | string
    idTienda?: UuidFilter<"Producto"> | string
    idCategoria?: UuidNullableFilter<"Producto"> | string | null
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen_url?: StringNullableFilter<"Producto"> | string | null
    estado?: StringNullableFilter<"Producto"> | string | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    promociones?: PromocionListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCategoria?: SortOrderInput | SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    imagen_url?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tienda?: TiendaOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    promociones?: PromocionOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    idTienda?: UuidFilter<"Producto"> | string
    idCategoria?: UuidNullableFilter<"Producto"> | string | null
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen_url?: StringNullableFilter<"Producto"> | string | null
    estado?: StringNullableFilter<"Producto"> | string | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    promociones?: PromocionListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCategoria?: SortOrderInput | SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    imagen_url?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Producto"> | string
    idTienda?: UuidWithAggregatesFilter<"Producto"> | string
    idCategoria?: UuidNullableWithAggregatesFilter<"Producto"> | string | null
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen_url?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type PromocionWhereInput = {
    AND?: PromocionWhereInput | PromocionWhereInput[]
    OR?: PromocionWhereInput[]
    NOT?: PromocionWhereInput | PromocionWhereInput[]
    id?: UuidFilter<"Promocion"> | string
    idTienda?: UuidFilter<"Promocion"> | string
    idProducto?: UuidFilter<"Promocion"> | string
    nombre?: StringFilter<"Promocion"> | string
    descripcion?: StringNullableFilter<"Promocion"> | string | null
    unidadesObjetivo?: IntFilter<"Promocion"> | number
    fechaInicio?: DateTimeFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    estado?: StringNullableFilter<"Promocion"> | string | null
    createdAt?: DateTimeFilter<"Promocion"> | Date | string
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    recompensa?: XOR<RecompensaNullableScalarRelationFilter, RecompensaWhereInput> | null
    acumulaciones?: AcumulacionListRelationFilter
    progresos?: ProgresoPromocionListRelationFilter
  }

  export type PromocionOrderByWithRelationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    unidadesObjetivo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tienda?: TiendaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
    recompensa?: RecompensaOrderByWithRelationInput
    acumulaciones?: AcumulacionOrderByRelationAggregateInput
    progresos?: ProgresoPromocionOrderByRelationAggregateInput
  }

  export type PromocionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromocionWhereInput | PromocionWhereInput[]
    OR?: PromocionWhereInput[]
    NOT?: PromocionWhereInput | PromocionWhereInput[]
    idTienda?: UuidFilter<"Promocion"> | string
    idProducto?: UuidFilter<"Promocion"> | string
    nombre?: StringFilter<"Promocion"> | string
    descripcion?: StringNullableFilter<"Promocion"> | string | null
    unidadesObjetivo?: IntFilter<"Promocion"> | number
    fechaInicio?: DateTimeFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    estado?: StringNullableFilter<"Promocion"> | string | null
    createdAt?: DateTimeFilter<"Promocion"> | Date | string
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    recompensa?: XOR<RecompensaNullableScalarRelationFilter, RecompensaWhereInput> | null
    acumulaciones?: AcumulacionListRelationFilter
    progresos?: ProgresoPromocionListRelationFilter
  }, "id">

  export type PromocionOrderByWithAggregationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    unidadesObjetivo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PromocionCountOrderByAggregateInput
    _avg?: PromocionAvgOrderByAggregateInput
    _max?: PromocionMaxOrderByAggregateInput
    _min?: PromocionMinOrderByAggregateInput
    _sum?: PromocionSumOrderByAggregateInput
  }

  export type PromocionScalarWhereWithAggregatesInput = {
    AND?: PromocionScalarWhereWithAggregatesInput | PromocionScalarWhereWithAggregatesInput[]
    OR?: PromocionScalarWhereWithAggregatesInput[]
    NOT?: PromocionScalarWhereWithAggregatesInput | PromocionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Promocion"> | string
    idTienda?: UuidWithAggregatesFilter<"Promocion"> | string
    idProducto?: UuidWithAggregatesFilter<"Promocion"> | string
    nombre?: StringWithAggregatesFilter<"Promocion"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Promocion"> | string | null
    unidadesObjetivo?: IntWithAggregatesFilter<"Promocion"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Promocion"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"Promocion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Promocion"> | Date | string
  }

  export type RecompensaWhereInput = {
    AND?: RecompensaWhereInput | RecompensaWhereInput[]
    OR?: RecompensaWhereInput[]
    NOT?: RecompensaWhereInput | RecompensaWhereInput[]
    id?: UuidFilter<"Recompensa"> | string
    idPromocion?: UuidFilter<"Recompensa"> | string
    tipo?: StringFilter<"Recompensa"> | string
    valor?: DecimalNullableFilter<"Recompensa"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringNullableFilter<"Recompensa"> | string | null
    createdAt?: DateTimeFilter<"Recompensa"> | Date | string
    promocion?: XOR<PromocionScalarRelationFilter, PromocionWhereInput>
    canjes?: CanjeListRelationFilter
  }

  export type RecompensaOrderByWithRelationInput = {
    id?: SortOrder
    idPromocion?: SortOrder
    tipo?: SortOrder
    valor?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    promocion?: PromocionOrderByWithRelationInput
    canjes?: CanjeOrderByRelationAggregateInput
  }

  export type RecompensaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idPromocion?: string
    AND?: RecompensaWhereInput | RecompensaWhereInput[]
    OR?: RecompensaWhereInput[]
    NOT?: RecompensaWhereInput | RecompensaWhereInput[]
    tipo?: StringFilter<"Recompensa"> | string
    valor?: DecimalNullableFilter<"Recompensa"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringNullableFilter<"Recompensa"> | string | null
    createdAt?: DateTimeFilter<"Recompensa"> | Date | string
    promocion?: XOR<PromocionScalarRelationFilter, PromocionWhereInput>
    canjes?: CanjeListRelationFilter
  }, "id" | "idPromocion">

  export type RecompensaOrderByWithAggregationInput = {
    id?: SortOrder
    idPromocion?: SortOrder
    tipo?: SortOrder
    valor?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RecompensaCountOrderByAggregateInput
    _avg?: RecompensaAvgOrderByAggregateInput
    _max?: RecompensaMaxOrderByAggregateInput
    _min?: RecompensaMinOrderByAggregateInput
    _sum?: RecompensaSumOrderByAggregateInput
  }

  export type RecompensaScalarWhereWithAggregatesInput = {
    AND?: RecompensaScalarWhereWithAggregatesInput | RecompensaScalarWhereWithAggregatesInput[]
    OR?: RecompensaScalarWhereWithAggregatesInput[]
    NOT?: RecompensaScalarWhereWithAggregatesInput | RecompensaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Recompensa"> | string
    idPromocion?: UuidWithAggregatesFilter<"Recompensa"> | string
    tipo?: StringWithAggregatesFilter<"Recompensa"> | string
    valor?: DecimalNullableWithAggregatesFilter<"Recompensa"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringNullableWithAggregatesFilter<"Recompensa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Recompensa"> | Date | string
  }

  export type QrWhereInput = {
    AND?: QrWhereInput | QrWhereInput[]
    OR?: QrWhereInput[]
    NOT?: QrWhereInput | QrWhereInput[]
    id?: UuidFilter<"Qr"> | string
    idTienda?: UuidFilter<"Qr"> | string
    idCliente?: UuidFilter<"Qr"> | string
    status?: StringNullableFilter<"Qr"> | string | null
    fechaCreacion?: DateTimeFilter<"Qr"> | Date | string
    fechaExpiracion?: DateTimeFilter<"Qr"> | Date | string
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    acumulaciones?: AcumulacionListRelationFilter
  }

  export type QrOrderByWithRelationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCliente?: SortOrder
    status?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    fechaExpiracion?: SortOrder
    tienda?: TiendaOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    acumulaciones?: AcumulacionOrderByRelationAggregateInput
  }

  export type QrWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QrWhereInput | QrWhereInput[]
    OR?: QrWhereInput[]
    NOT?: QrWhereInput | QrWhereInput[]
    idTienda?: UuidFilter<"Qr"> | string
    idCliente?: UuidFilter<"Qr"> | string
    status?: StringNullableFilter<"Qr"> | string | null
    fechaCreacion?: DateTimeFilter<"Qr"> | Date | string
    fechaExpiracion?: DateTimeFilter<"Qr"> | Date | string
    tienda?: XOR<TiendaScalarRelationFilter, TiendaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    acumulaciones?: AcumulacionListRelationFilter
  }, "id">

  export type QrOrderByWithAggregationInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCliente?: SortOrder
    status?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    fechaExpiracion?: SortOrder
    _count?: QrCountOrderByAggregateInput
    _max?: QrMaxOrderByAggregateInput
    _min?: QrMinOrderByAggregateInput
  }

  export type QrScalarWhereWithAggregatesInput = {
    AND?: QrScalarWhereWithAggregatesInput | QrScalarWhereWithAggregatesInput[]
    OR?: QrScalarWhereWithAggregatesInput[]
    NOT?: QrScalarWhereWithAggregatesInput | QrScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Qr"> | string
    idTienda?: UuidWithAggregatesFilter<"Qr"> | string
    idCliente?: UuidWithAggregatesFilter<"Qr"> | string
    status?: StringNullableWithAggregatesFilter<"Qr"> | string | null
    fechaCreacion?: DateTimeWithAggregatesFilter<"Qr"> | Date | string
    fechaExpiracion?: DateTimeWithAggregatesFilter<"Qr"> | Date | string
  }

  export type AcumulacionWhereInput = {
    AND?: AcumulacionWhereInput | AcumulacionWhereInput[]
    OR?: AcumulacionWhereInput[]
    NOT?: AcumulacionWhereInput | AcumulacionWhereInput[]
    id?: UuidFilter<"Acumulacion"> | string
    idCliente?: UuidFilter<"Acumulacion"> | string
    idPromocion?: UuidFilter<"Acumulacion"> | string
    idQR?: UuidNullableFilter<"Acumulacion"> | string | null
    cantidad?: IntFilter<"Acumulacion"> | number
    fecha?: DateTimeFilter<"Acumulacion"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    promocion?: XOR<PromocionScalarRelationFilter, PromocionWhereInput>
    qr?: XOR<QrNullableScalarRelationFilter, QrWhereInput> | null
  }

  export type AcumulacionOrderByWithRelationInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idPromocion?: SortOrder
    idQR?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    promocion?: PromocionOrderByWithRelationInput
    qr?: QrOrderByWithRelationInput
  }

  export type AcumulacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcumulacionWhereInput | AcumulacionWhereInput[]
    OR?: AcumulacionWhereInput[]
    NOT?: AcumulacionWhereInput | AcumulacionWhereInput[]
    idCliente?: UuidFilter<"Acumulacion"> | string
    idPromocion?: UuidFilter<"Acumulacion"> | string
    idQR?: UuidNullableFilter<"Acumulacion"> | string | null
    cantidad?: IntFilter<"Acumulacion"> | number
    fecha?: DateTimeFilter<"Acumulacion"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    promocion?: XOR<PromocionScalarRelationFilter, PromocionWhereInput>
    qr?: XOR<QrNullableScalarRelationFilter, QrWhereInput> | null
  }, "id">

  export type AcumulacionOrderByWithAggregationInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idPromocion?: SortOrder
    idQR?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    _count?: AcumulacionCountOrderByAggregateInput
    _avg?: AcumulacionAvgOrderByAggregateInput
    _max?: AcumulacionMaxOrderByAggregateInput
    _min?: AcumulacionMinOrderByAggregateInput
    _sum?: AcumulacionSumOrderByAggregateInput
  }

  export type AcumulacionScalarWhereWithAggregatesInput = {
    AND?: AcumulacionScalarWhereWithAggregatesInput | AcumulacionScalarWhereWithAggregatesInput[]
    OR?: AcumulacionScalarWhereWithAggregatesInput[]
    NOT?: AcumulacionScalarWhereWithAggregatesInput | AcumulacionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Acumulacion"> | string
    idCliente?: UuidWithAggregatesFilter<"Acumulacion"> | string
    idPromocion?: UuidWithAggregatesFilter<"Acumulacion"> | string
    idQR?: UuidNullableWithAggregatesFilter<"Acumulacion"> | string | null
    cantidad?: IntWithAggregatesFilter<"Acumulacion"> | number
    fecha?: DateTimeWithAggregatesFilter<"Acumulacion"> | Date | string
  }

  export type ProgresoPromocionWhereInput = {
    AND?: ProgresoPromocionWhereInput | ProgresoPromocionWhereInput[]
    OR?: ProgresoPromocionWhereInput[]
    NOT?: ProgresoPromocionWhereInput | ProgresoPromocionWhereInput[]
    idCliente?: UuidFilter<"ProgresoPromocion"> | string
    idPromocion?: UuidFilter<"ProgresoPromocion"> | string
    totalAcumulado?: IntFilter<"ProgresoPromocion"> | number
    ultimaActualizacion?: DateTimeFilter<"ProgresoPromocion"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    promocion?: XOR<PromocionScalarRelationFilter, PromocionWhereInput>
  }

  export type ProgresoPromocionOrderByWithRelationInput = {
    idCliente?: SortOrder
    idPromocion?: SortOrder
    totalAcumulado?: SortOrder
    ultimaActualizacion?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    promocion?: PromocionOrderByWithRelationInput
  }

  export type ProgresoPromocionWhereUniqueInput = Prisma.AtLeast<{
    idCliente_idPromocion?: ProgresoPromocionIdClienteIdPromocionCompoundUniqueInput
    AND?: ProgresoPromocionWhereInput | ProgresoPromocionWhereInput[]
    OR?: ProgresoPromocionWhereInput[]
    NOT?: ProgresoPromocionWhereInput | ProgresoPromocionWhereInput[]
    idCliente?: UuidFilter<"ProgresoPromocion"> | string
    idPromocion?: UuidFilter<"ProgresoPromocion"> | string
    totalAcumulado?: IntFilter<"ProgresoPromocion"> | number
    ultimaActualizacion?: DateTimeFilter<"ProgresoPromocion"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    promocion?: XOR<PromocionScalarRelationFilter, PromocionWhereInput>
  }, "idCliente_idPromocion">

  export type ProgresoPromocionOrderByWithAggregationInput = {
    idCliente?: SortOrder
    idPromocion?: SortOrder
    totalAcumulado?: SortOrder
    ultimaActualizacion?: SortOrder
    _count?: ProgresoPromocionCountOrderByAggregateInput
    _avg?: ProgresoPromocionAvgOrderByAggregateInput
    _max?: ProgresoPromocionMaxOrderByAggregateInput
    _min?: ProgresoPromocionMinOrderByAggregateInput
    _sum?: ProgresoPromocionSumOrderByAggregateInput
  }

  export type ProgresoPromocionScalarWhereWithAggregatesInput = {
    AND?: ProgresoPromocionScalarWhereWithAggregatesInput | ProgresoPromocionScalarWhereWithAggregatesInput[]
    OR?: ProgresoPromocionScalarWhereWithAggregatesInput[]
    NOT?: ProgresoPromocionScalarWhereWithAggregatesInput | ProgresoPromocionScalarWhereWithAggregatesInput[]
    idCliente?: UuidWithAggregatesFilter<"ProgresoPromocion"> | string
    idPromocion?: UuidWithAggregatesFilter<"ProgresoPromocion"> | string
    totalAcumulado?: IntWithAggregatesFilter<"ProgresoPromocion"> | number
    ultimaActualizacion?: DateTimeWithAggregatesFilter<"ProgresoPromocion"> | Date | string
  }

  export type CanjeWhereInput = {
    AND?: CanjeWhereInput | CanjeWhereInput[]
    OR?: CanjeWhereInput[]
    NOT?: CanjeWhereInput | CanjeWhereInput[]
    id?: UuidFilter<"Canje"> | string
    idCliente?: UuidFilter<"Canje"> | string
    idRecompensa?: UuidFilter<"Canje"> | string
    codigo?: StringFilter<"Canje"> | string
    estado?: StringNullableFilter<"Canje"> | string | null
    fechaGeneracion?: DateTimeFilter<"Canje"> | Date | string
    fechaExpiracion?: DateTimeNullableFilter<"Canje"> | Date | string | null
    fechaUso?: DateTimeNullableFilter<"Canje"> | Date | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    recompensa?: XOR<RecompensaScalarRelationFilter, RecompensaWhereInput>
  }

  export type CanjeOrderByWithRelationInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idRecompensa?: SortOrder
    codigo?: SortOrder
    estado?: SortOrderInput | SortOrder
    fechaGeneracion?: SortOrder
    fechaExpiracion?: SortOrderInput | SortOrder
    fechaUso?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    recompensa?: RecompensaOrderByWithRelationInput
  }

  export type CanjeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: CanjeWhereInput | CanjeWhereInput[]
    OR?: CanjeWhereInput[]
    NOT?: CanjeWhereInput | CanjeWhereInput[]
    idCliente?: UuidFilter<"Canje"> | string
    idRecompensa?: UuidFilter<"Canje"> | string
    estado?: StringNullableFilter<"Canje"> | string | null
    fechaGeneracion?: DateTimeFilter<"Canje"> | Date | string
    fechaExpiracion?: DateTimeNullableFilter<"Canje"> | Date | string | null
    fechaUso?: DateTimeNullableFilter<"Canje"> | Date | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    recompensa?: XOR<RecompensaScalarRelationFilter, RecompensaWhereInput>
  }, "id" | "codigo">

  export type CanjeOrderByWithAggregationInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idRecompensa?: SortOrder
    codigo?: SortOrder
    estado?: SortOrderInput | SortOrder
    fechaGeneracion?: SortOrder
    fechaExpiracion?: SortOrderInput | SortOrder
    fechaUso?: SortOrderInput | SortOrder
    _count?: CanjeCountOrderByAggregateInput
    _max?: CanjeMaxOrderByAggregateInput
    _min?: CanjeMinOrderByAggregateInput
  }

  export type CanjeScalarWhereWithAggregatesInput = {
    AND?: CanjeScalarWhereWithAggregatesInput | CanjeScalarWhereWithAggregatesInput[]
    OR?: CanjeScalarWhereWithAggregatesInput[]
    NOT?: CanjeScalarWhereWithAggregatesInput | CanjeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Canje"> | string
    idCliente?: UuidWithAggregatesFilter<"Canje"> | string
    idRecompensa?: UuidWithAggregatesFilter<"Canje"> | string
    codigo?: StringWithAggregatesFilter<"Canje"> | string
    estado?: StringNullableWithAggregatesFilter<"Canje"> | string | null
    fechaGeneracion?: DateTimeWithAggregatesFilter<"Canje"> | Date | string
    fechaExpiracion?: DateTimeNullableWithAggregatesFilter<"Canje"> | Date | string | null
    fechaUso?: DateTimeNullableWithAggregatesFilter<"Canje"> | Date | string | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: UuidFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    tipo?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    clienteId?: UuidNullableFilter<"Token"> | string | null
    tiendaId?: UuidNullableFilter<"Token"> | string | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    tienda?: XOR<TiendaNullableScalarRelationFilter, TiendaWhereInput> | null
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    clienteId?: SortOrderInput | SortOrder
    tiendaId?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    tienda?: TiendaOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    tipo?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    clienteId?: UuidNullableFilter<"Token"> | string | null
    tiendaId?: UuidNullableFilter<"Token"> | string | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    tienda?: XOR<TiendaNullableScalarRelationFilter, TiendaWhereInput> | null
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    clienteId?: SortOrderInput | SortOrder
    tiendaId?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    tipo?: StringWithAggregatesFilter<"Token"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    clienteId?: UuidNullableWithAggregatesFilter<"Token"> | string | null
    tiendaId?: UuidNullableWithAggregatesFilter<"Token"> | string | null
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    tipo?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    tipo?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    tipo?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    tipo?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    tipo?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaCreateNestedManyWithoutClienteInput
    qrs?: QrCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutClienteInput
    canjes?: CanjeCreateNestedManyWithoutClienteInput
    tokens?: TokenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput
    qrs?: QrUncheckedCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput
    canjes?: CanjeUncheckedCreateNestedManyWithoutClienteInput
    tokens?: TokenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUpdateManyWithoutClienteNestedInput
    qrs?: QrUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUpdateManyWithoutClienteNestedInput
    tokens?: TokenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput
    qrs?: QrUncheckedUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUncheckedUpdateManyWithoutClienteNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiendaCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaCreateNestedManyWithoutTiendaInput
    productos?: ProductoCreateNestedManyWithoutTiendaInput
    promociones?: PromocionCreateNestedManyWithoutTiendaInput
    qrs?: QrCreateNestedManyWithoutTiendaInput
    tokens?: TokenCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutTiendaInput
    productos?: ProductoUncheckedCreateNestedManyWithoutTiendaInput
    promociones?: PromocionUncheckedCreateNestedManyWithoutTiendaInput
    qrs?: QrUncheckedCreateNestedManyWithoutTiendaInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUpdateManyWithoutTiendaNestedInput
    qrs?: QrUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUncheckedUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUncheckedUpdateManyWithoutTiendaNestedInput
    qrs?: QrUncheckedUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
  }

  export type TiendaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiendaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteTiendaCreateInput = {
    fechaRegistro?: Date | string
    estado?: string | null
    cliente: ClienteCreateNestedOneWithoutTiendasInput
    tienda: TiendaCreateNestedOneWithoutClientesInput
  }

  export type ClienteTiendaUncheckedCreateInput = {
    idCliente: string
    idTienda: string
    fechaRegistro?: Date | string
    estado?: string | null
  }

  export type ClienteTiendaUpdateInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutTiendasNestedInput
    tienda?: TiendaUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteTiendaUncheckedUpdateInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteTiendaCreateManyInput = {
    idCliente: string
    idTienda: string
    fechaRegistro?: Date | string
    estado?: string | null
  }

  export type ClienteTiendaUpdateManyMutationInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteTiendaUncheckedUpdateManyInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    tienda: TiendaCreateNestedOneWithoutCategoriasInput
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tienda?: TiendaUpdateOneRequiredWithoutCategoriasNestedInput
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutProductosInput
    categoria?: CategoriaCreateNestedOneWithoutProductosInput
    promociones?: PromocionCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: string
    idTienda: string
    idCategoria?: string | null
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    promociones?: PromocionUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutProductosNestedInput
    categoria?: CategoriaUpdateOneWithoutProductosNestedInput
    promociones?: PromocionUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idCategoria?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promociones?: PromocionUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: string
    idTienda: string
    idCategoria?: string | null
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idCategoria?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutPromocionesInput
    producto: ProductoCreateNestedOneWithoutPromocionesInput
    recompensa?: RecompensaCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateInput = {
    id?: string
    idTienda: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    recompensa?: RecompensaUncheckedCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutPromocionesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPromocionesNestedInput
    recompensa?: RecompensaUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recompensa?: RecompensaUncheckedUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionCreateManyInput = {
    id?: string
    idTienda: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type PromocionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecompensaCreateInput = {
    id?: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
    promocion: PromocionCreateNestedOneWithoutRecompensaInput
    canjes?: CanjeCreateNestedManyWithoutRecompensaInput
  }

  export type RecompensaUncheckedCreateInput = {
    id?: string
    idPromocion: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
    canjes?: CanjeUncheckedCreateNestedManyWithoutRecompensaInput
  }

  export type RecompensaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promocion?: PromocionUpdateOneRequiredWithoutRecompensaNestedInput
    canjes?: CanjeUpdateManyWithoutRecompensaNestedInput
  }

  export type RecompensaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canjes?: CanjeUncheckedUpdateManyWithoutRecompensaNestedInput
  }

  export type RecompensaCreateManyInput = {
    id?: string
    idPromocion: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type RecompensaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecompensaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrCreateInput = {
    id?: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    tienda: TiendaCreateNestedOneWithoutQrsInput
    cliente: ClienteCreateNestedOneWithoutQrsInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutQrInput
  }

  export type QrUncheckedCreateInput = {
    id?: string
    idTienda: string
    idCliente: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutQrInput
  }

  export type QrUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutQrsNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutQrsNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutQrNestedInput
  }

  export type QrUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutQrNestedInput
  }

  export type QrCreateManyInput = {
    id?: string
    idTienda: string
    idCliente: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
  }

  export type QrUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionCreateInput = {
    id?: string
    cantidad?: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutAcumulacionesInput
    promocion: PromocionCreateNestedOneWithoutAcumulacionesInput
    qr?: QrCreateNestedOneWithoutAcumulacionesInput
  }

  export type AcumulacionUncheckedCreateInput = {
    id?: string
    idCliente: string
    idPromocion: string
    idQR?: string | null
    cantidad?: number
    fecha?: Date | string
  }

  export type AcumulacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAcumulacionesNestedInput
    promocion?: PromocionUpdateOneRequiredWithoutAcumulacionesNestedInput
    qr?: QrUpdateOneWithoutAcumulacionesNestedInput
  }

  export type AcumulacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    idQR?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionCreateManyInput = {
    id?: string
    idCliente: string
    idPromocion: string
    idQR?: string | null
    cantidad?: number
    fecha?: Date | string
  }

  export type AcumulacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    idQR?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionCreateInput = {
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
    cliente: ClienteCreateNestedOneWithoutProgresosInput
    promocion: PromocionCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoPromocionUncheckedCreateInput = {
    idCliente: string
    idPromocion: string
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
  }

  export type ProgresoPromocionUpdateInput = {
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutProgresosNestedInput
    promocion?: PromocionUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoPromocionUncheckedUpdateInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionCreateManyInput = {
    idCliente: string
    idPromocion: string
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
  }

  export type ProgresoPromocionUpdateManyMutationInput = {
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionUncheckedUpdateManyInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanjeCreateInput = {
    id?: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutCanjesInput
    recompensa: RecompensaCreateNestedOneWithoutCanjesInput
  }

  export type CanjeUncheckedCreateInput = {
    id?: string
    idCliente: string
    idRecompensa: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
  }

  export type CanjeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutCanjesNestedInput
    recompensa?: RecompensaUpdateOneRequiredWithoutCanjesNestedInput
  }

  export type CanjeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idRecompensa?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CanjeCreateManyInput = {
    id?: string
    idCliente: string
    idRecompensa: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
  }

  export type CanjeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CanjeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idRecompensa?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    cliente?: ClienteCreateNestedOneWithoutTokensInput
    tienda?: TiendaCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    clienteId?: string | null
    tiendaId?: string | null
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneWithoutTokensNestedInput
    tienda?: TiendaUpdateOneWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    tiendaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateManyInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    clienteId?: string | null
    tiendaId?: string | null
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    tiendaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    token: string
    email: string
    tipo: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    token: string
    email: string
    tipo: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    token: string
    email: string
    tipo: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteTiendaListRelationFilter = {
    every?: ClienteTiendaWhereInput
    some?: ClienteTiendaWhereInput
    none?: ClienteTiendaWhereInput
  }

  export type QrListRelationFilter = {
    every?: QrWhereInput
    some?: QrWhereInput
    none?: QrWhereInput
  }

  export type AcumulacionListRelationFilter = {
    every?: AcumulacionWhereInput
    some?: AcumulacionWhereInput
    none?: AcumulacionWhereInput
  }

  export type ProgresoPromocionListRelationFilter = {
    every?: ProgresoPromocionWhereInput
    some?: ProgresoPromocionWhereInput
    none?: ProgresoPromocionWhereInput
  }

  export type CanjeListRelationFilter = {
    every?: CanjeWhereInput
    some?: CanjeWhereInput
    none?: CanjeWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteTiendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QrOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcumulacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgresoPromocionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CanjeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type PromocionListRelationFilter = {
    every?: PromocionWhereInput
    some?: PromocionWhereInput
    none?: PromocionWhereInput
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromocionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiendaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    logo_url?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type TiendaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    logo_url?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type TiendaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    logo_url?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type TiendaScalarRelationFilter = {
    is?: TiendaWhereInput
    isNot?: TiendaWhereInput
  }

  export type ClienteTiendaIdClienteIdTiendaCompoundUniqueInput = {
    idCliente: string
    idTienda: string
  }

  export type ClienteTiendaCountOrderByAggregateInput = {
    idCliente?: SortOrder
    idTienda?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type ClienteTiendaMaxOrderByAggregateInput = {
    idCliente?: SortOrder
    idTienda?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type ClienteTiendaMinOrderByAggregateInput = {
    idCliente?: SortOrder
    idTienda?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    imagen_url?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    imagen_url?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    imagen_url?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type RecompensaNullableScalarRelationFilter = {
    is?: RecompensaWhereInput | null
    isNot?: RecompensaWhereInput | null
  }

  export type PromocionCountOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidadesObjetivo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type PromocionAvgOrderByAggregateInput = {
    unidadesObjetivo?: SortOrder
  }

  export type PromocionMaxOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidadesObjetivo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type PromocionMinOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidadesObjetivo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type PromocionSumOrderByAggregateInput = {
    unidadesObjetivo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PromocionScalarRelationFilter = {
    is?: PromocionWhereInput
    isNot?: PromocionWhereInput
  }

  export type RecompensaCountOrderByAggregateInput = {
    id?: SortOrder
    idPromocion?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type RecompensaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type RecompensaMaxOrderByAggregateInput = {
    id?: SortOrder
    idPromocion?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type RecompensaMinOrderByAggregateInput = {
    id?: SortOrder
    idPromocion?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type RecompensaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type QrCountOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCliente?: SortOrder
    status?: SortOrder
    fechaCreacion?: SortOrder
    fechaExpiracion?: SortOrder
  }

  export type QrMaxOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCliente?: SortOrder
    status?: SortOrder
    fechaCreacion?: SortOrder
    fechaExpiracion?: SortOrder
  }

  export type QrMinOrderByAggregateInput = {
    id?: SortOrder
    idTienda?: SortOrder
    idCliente?: SortOrder
    status?: SortOrder
    fechaCreacion?: SortOrder
    fechaExpiracion?: SortOrder
  }

  export type QrNullableScalarRelationFilter = {
    is?: QrWhereInput | null
    isNot?: QrWhereInput | null
  }

  export type AcumulacionCountOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idPromocion?: SortOrder
    idQR?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
  }

  export type AcumulacionAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type AcumulacionMaxOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idPromocion?: SortOrder
    idQR?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
  }

  export type AcumulacionMinOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idPromocion?: SortOrder
    idQR?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
  }

  export type AcumulacionSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type ProgresoPromocionIdClienteIdPromocionCompoundUniqueInput = {
    idCliente: string
    idPromocion: string
  }

  export type ProgresoPromocionCountOrderByAggregateInput = {
    idCliente?: SortOrder
    idPromocion?: SortOrder
    totalAcumulado?: SortOrder
    ultimaActualizacion?: SortOrder
  }

  export type ProgresoPromocionAvgOrderByAggregateInput = {
    totalAcumulado?: SortOrder
  }

  export type ProgresoPromocionMaxOrderByAggregateInput = {
    idCliente?: SortOrder
    idPromocion?: SortOrder
    totalAcumulado?: SortOrder
    ultimaActualizacion?: SortOrder
  }

  export type ProgresoPromocionMinOrderByAggregateInput = {
    idCliente?: SortOrder
    idPromocion?: SortOrder
    totalAcumulado?: SortOrder
    ultimaActualizacion?: SortOrder
  }

  export type ProgresoPromocionSumOrderByAggregateInput = {
    totalAcumulado?: SortOrder
  }

  export type RecompensaScalarRelationFilter = {
    is?: RecompensaWhereInput
    isNot?: RecompensaWhereInput
  }

  export type CanjeCountOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idRecompensa?: SortOrder
    codigo?: SortOrder
    estado?: SortOrder
    fechaGeneracion?: SortOrder
    fechaExpiracion?: SortOrder
    fechaUso?: SortOrder
  }

  export type CanjeMaxOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idRecompensa?: SortOrder
    codigo?: SortOrder
    estado?: SortOrder
    fechaGeneracion?: SortOrder
    fechaExpiracion?: SortOrder
    fechaUso?: SortOrder
  }

  export type CanjeMinOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idRecompensa?: SortOrder
    codigo?: SortOrder
    estado?: SortOrder
    fechaGeneracion?: SortOrder
    fechaExpiracion?: SortOrder
    fechaUso?: SortOrder
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type TiendaNullableScalarRelationFilter = {
    is?: TiendaWhereInput | null
    isNot?: TiendaWhereInput | null
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    clienteId?: SortOrder
    tiendaId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    clienteId?: SortOrder
    tiendaId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    clienteId?: SortOrder
    tiendaId?: SortOrder
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    tipo?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    tipo?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    tipo?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteTiendaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ClienteTiendaCreateWithoutClienteInput, ClienteTiendaUncheckedCreateWithoutClienteInput> | ClienteTiendaCreateWithoutClienteInput[] | ClienteTiendaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutClienteInput | ClienteTiendaCreateOrConnectWithoutClienteInput[]
    createMany?: ClienteTiendaCreateManyClienteInputEnvelope
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
  }

  export type QrCreateNestedManyWithoutClienteInput = {
    create?: XOR<QrCreateWithoutClienteInput, QrUncheckedCreateWithoutClienteInput> | QrCreateWithoutClienteInput[] | QrUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QrCreateOrConnectWithoutClienteInput | QrCreateOrConnectWithoutClienteInput[]
    createMany?: QrCreateManyClienteInputEnvelope
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
  }

  export type AcumulacionCreateNestedManyWithoutClienteInput = {
    create?: XOR<AcumulacionCreateWithoutClienteInput, AcumulacionUncheckedCreateWithoutClienteInput> | AcumulacionCreateWithoutClienteInput[] | AcumulacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutClienteInput | AcumulacionCreateOrConnectWithoutClienteInput[]
    createMany?: AcumulacionCreateManyClienteInputEnvelope
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
  }

  export type ProgresoPromocionCreateNestedManyWithoutClienteInput = {
    create?: XOR<ProgresoPromocionCreateWithoutClienteInput, ProgresoPromocionUncheckedCreateWithoutClienteInput> | ProgresoPromocionCreateWithoutClienteInput[] | ProgresoPromocionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutClienteInput | ProgresoPromocionCreateOrConnectWithoutClienteInput[]
    createMany?: ProgresoPromocionCreateManyClienteInputEnvelope
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
  }

  export type CanjeCreateNestedManyWithoutClienteInput = {
    create?: XOR<CanjeCreateWithoutClienteInput, CanjeUncheckedCreateWithoutClienteInput> | CanjeCreateWithoutClienteInput[] | CanjeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutClienteInput | CanjeCreateOrConnectWithoutClienteInput[]
    createMany?: CanjeCreateManyClienteInputEnvelope
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutClienteInput = {
    create?: XOR<TokenCreateWithoutClienteInput, TokenUncheckedCreateWithoutClienteInput> | TokenCreateWithoutClienteInput[] | TokenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutClienteInput | TokenCreateOrConnectWithoutClienteInput[]
    createMany?: TokenCreateManyClienteInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ClienteTiendaCreateWithoutClienteInput, ClienteTiendaUncheckedCreateWithoutClienteInput> | ClienteTiendaCreateWithoutClienteInput[] | ClienteTiendaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutClienteInput | ClienteTiendaCreateOrConnectWithoutClienteInput[]
    createMany?: ClienteTiendaCreateManyClienteInputEnvelope
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
  }

  export type QrUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<QrCreateWithoutClienteInput, QrUncheckedCreateWithoutClienteInput> | QrCreateWithoutClienteInput[] | QrUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QrCreateOrConnectWithoutClienteInput | QrCreateOrConnectWithoutClienteInput[]
    createMany?: QrCreateManyClienteInputEnvelope
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
  }

  export type AcumulacionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AcumulacionCreateWithoutClienteInput, AcumulacionUncheckedCreateWithoutClienteInput> | AcumulacionCreateWithoutClienteInput[] | AcumulacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutClienteInput | AcumulacionCreateOrConnectWithoutClienteInput[]
    createMany?: AcumulacionCreateManyClienteInputEnvelope
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
  }

  export type ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ProgresoPromocionCreateWithoutClienteInput, ProgresoPromocionUncheckedCreateWithoutClienteInput> | ProgresoPromocionCreateWithoutClienteInput[] | ProgresoPromocionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutClienteInput | ProgresoPromocionCreateOrConnectWithoutClienteInput[]
    createMany?: ProgresoPromocionCreateManyClienteInputEnvelope
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
  }

  export type CanjeUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CanjeCreateWithoutClienteInput, CanjeUncheckedCreateWithoutClienteInput> | CanjeCreateWithoutClienteInput[] | CanjeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutClienteInput | CanjeCreateOrConnectWithoutClienteInput[]
    createMany?: CanjeCreateManyClienteInputEnvelope
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<TokenCreateWithoutClienteInput, TokenUncheckedCreateWithoutClienteInput> | TokenCreateWithoutClienteInput[] | TokenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutClienteInput | TokenCreateOrConnectWithoutClienteInput[]
    createMany?: TokenCreateManyClienteInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteTiendaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ClienteTiendaCreateWithoutClienteInput, ClienteTiendaUncheckedCreateWithoutClienteInput> | ClienteTiendaCreateWithoutClienteInput[] | ClienteTiendaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutClienteInput | ClienteTiendaCreateOrConnectWithoutClienteInput[]
    upsert?: ClienteTiendaUpsertWithWhereUniqueWithoutClienteInput | ClienteTiendaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ClienteTiendaCreateManyClienteInputEnvelope
    set?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    disconnect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    delete?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    update?: ClienteTiendaUpdateWithWhereUniqueWithoutClienteInput | ClienteTiendaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ClienteTiendaUpdateManyWithWhereWithoutClienteInput | ClienteTiendaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ClienteTiendaScalarWhereInput | ClienteTiendaScalarWhereInput[]
  }

  export type QrUpdateManyWithoutClienteNestedInput = {
    create?: XOR<QrCreateWithoutClienteInput, QrUncheckedCreateWithoutClienteInput> | QrCreateWithoutClienteInput[] | QrUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QrCreateOrConnectWithoutClienteInput | QrCreateOrConnectWithoutClienteInput[]
    upsert?: QrUpsertWithWhereUniqueWithoutClienteInput | QrUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: QrCreateManyClienteInputEnvelope
    set?: QrWhereUniqueInput | QrWhereUniqueInput[]
    disconnect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    delete?: QrWhereUniqueInput | QrWhereUniqueInput[]
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    update?: QrUpdateWithWhereUniqueWithoutClienteInput | QrUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: QrUpdateManyWithWhereWithoutClienteInput | QrUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: QrScalarWhereInput | QrScalarWhereInput[]
  }

  export type AcumulacionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AcumulacionCreateWithoutClienteInput, AcumulacionUncheckedCreateWithoutClienteInput> | AcumulacionCreateWithoutClienteInput[] | AcumulacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutClienteInput | AcumulacionCreateOrConnectWithoutClienteInput[]
    upsert?: AcumulacionUpsertWithWhereUniqueWithoutClienteInput | AcumulacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AcumulacionCreateManyClienteInputEnvelope
    set?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    disconnect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    delete?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    update?: AcumulacionUpdateWithWhereUniqueWithoutClienteInput | AcumulacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AcumulacionUpdateManyWithWhereWithoutClienteInput | AcumulacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
  }

  export type ProgresoPromocionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ProgresoPromocionCreateWithoutClienteInput, ProgresoPromocionUncheckedCreateWithoutClienteInput> | ProgresoPromocionCreateWithoutClienteInput[] | ProgresoPromocionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutClienteInput | ProgresoPromocionCreateOrConnectWithoutClienteInput[]
    upsert?: ProgresoPromocionUpsertWithWhereUniqueWithoutClienteInput | ProgresoPromocionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ProgresoPromocionCreateManyClienteInputEnvelope
    set?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    disconnect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    delete?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    update?: ProgresoPromocionUpdateWithWhereUniqueWithoutClienteInput | ProgresoPromocionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ProgresoPromocionUpdateManyWithWhereWithoutClienteInput | ProgresoPromocionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ProgresoPromocionScalarWhereInput | ProgresoPromocionScalarWhereInput[]
  }

  export type CanjeUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CanjeCreateWithoutClienteInput, CanjeUncheckedCreateWithoutClienteInput> | CanjeCreateWithoutClienteInput[] | CanjeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutClienteInput | CanjeCreateOrConnectWithoutClienteInput[]
    upsert?: CanjeUpsertWithWhereUniqueWithoutClienteInput | CanjeUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CanjeCreateManyClienteInputEnvelope
    set?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    disconnect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    delete?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    update?: CanjeUpdateWithWhereUniqueWithoutClienteInput | CanjeUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CanjeUpdateManyWithWhereWithoutClienteInput | CanjeUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CanjeScalarWhereInput | CanjeScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TokenCreateWithoutClienteInput, TokenUncheckedCreateWithoutClienteInput> | TokenCreateWithoutClienteInput[] | TokenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutClienteInput | TokenCreateOrConnectWithoutClienteInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutClienteInput | TokenUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TokenCreateManyClienteInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutClienteInput | TokenUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutClienteInput | TokenUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ClienteTiendaCreateWithoutClienteInput, ClienteTiendaUncheckedCreateWithoutClienteInput> | ClienteTiendaCreateWithoutClienteInput[] | ClienteTiendaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutClienteInput | ClienteTiendaCreateOrConnectWithoutClienteInput[]
    upsert?: ClienteTiendaUpsertWithWhereUniqueWithoutClienteInput | ClienteTiendaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ClienteTiendaCreateManyClienteInputEnvelope
    set?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    disconnect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    delete?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    update?: ClienteTiendaUpdateWithWhereUniqueWithoutClienteInput | ClienteTiendaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ClienteTiendaUpdateManyWithWhereWithoutClienteInput | ClienteTiendaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ClienteTiendaScalarWhereInput | ClienteTiendaScalarWhereInput[]
  }

  export type QrUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<QrCreateWithoutClienteInput, QrUncheckedCreateWithoutClienteInput> | QrCreateWithoutClienteInput[] | QrUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QrCreateOrConnectWithoutClienteInput | QrCreateOrConnectWithoutClienteInput[]
    upsert?: QrUpsertWithWhereUniqueWithoutClienteInput | QrUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: QrCreateManyClienteInputEnvelope
    set?: QrWhereUniqueInput | QrWhereUniqueInput[]
    disconnect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    delete?: QrWhereUniqueInput | QrWhereUniqueInput[]
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    update?: QrUpdateWithWhereUniqueWithoutClienteInput | QrUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: QrUpdateManyWithWhereWithoutClienteInput | QrUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: QrScalarWhereInput | QrScalarWhereInput[]
  }

  export type AcumulacionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AcumulacionCreateWithoutClienteInput, AcumulacionUncheckedCreateWithoutClienteInput> | AcumulacionCreateWithoutClienteInput[] | AcumulacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutClienteInput | AcumulacionCreateOrConnectWithoutClienteInput[]
    upsert?: AcumulacionUpsertWithWhereUniqueWithoutClienteInput | AcumulacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AcumulacionCreateManyClienteInputEnvelope
    set?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    disconnect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    delete?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    update?: AcumulacionUpdateWithWhereUniqueWithoutClienteInput | AcumulacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AcumulacionUpdateManyWithWhereWithoutClienteInput | AcumulacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
  }

  export type ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ProgresoPromocionCreateWithoutClienteInput, ProgresoPromocionUncheckedCreateWithoutClienteInput> | ProgresoPromocionCreateWithoutClienteInput[] | ProgresoPromocionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutClienteInput | ProgresoPromocionCreateOrConnectWithoutClienteInput[]
    upsert?: ProgresoPromocionUpsertWithWhereUniqueWithoutClienteInput | ProgresoPromocionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ProgresoPromocionCreateManyClienteInputEnvelope
    set?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    disconnect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    delete?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    update?: ProgresoPromocionUpdateWithWhereUniqueWithoutClienteInput | ProgresoPromocionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ProgresoPromocionUpdateManyWithWhereWithoutClienteInput | ProgresoPromocionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ProgresoPromocionScalarWhereInput | ProgresoPromocionScalarWhereInput[]
  }

  export type CanjeUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CanjeCreateWithoutClienteInput, CanjeUncheckedCreateWithoutClienteInput> | CanjeCreateWithoutClienteInput[] | CanjeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutClienteInput | CanjeCreateOrConnectWithoutClienteInput[]
    upsert?: CanjeUpsertWithWhereUniqueWithoutClienteInput | CanjeUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CanjeCreateManyClienteInputEnvelope
    set?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    disconnect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    delete?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    update?: CanjeUpdateWithWhereUniqueWithoutClienteInput | CanjeUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CanjeUpdateManyWithWhereWithoutClienteInput | CanjeUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CanjeScalarWhereInput | CanjeScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TokenCreateWithoutClienteInput, TokenUncheckedCreateWithoutClienteInput> | TokenCreateWithoutClienteInput[] | TokenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutClienteInput | TokenCreateOrConnectWithoutClienteInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutClienteInput | TokenUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TokenCreateManyClienteInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutClienteInput | TokenUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutClienteInput | TokenUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ClienteTiendaCreateNestedManyWithoutTiendaInput = {
    create?: XOR<ClienteTiendaCreateWithoutTiendaInput, ClienteTiendaUncheckedCreateWithoutTiendaInput> | ClienteTiendaCreateWithoutTiendaInput[] | ClienteTiendaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutTiendaInput | ClienteTiendaCreateOrConnectWithoutTiendaInput[]
    createMany?: ClienteTiendaCreateManyTiendaInputEnvelope
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
  }

  export type CategoriaCreateNestedManyWithoutTiendaInput = {
    create?: XOR<CategoriaCreateWithoutTiendaInput, CategoriaUncheckedCreateWithoutTiendaInput> | CategoriaCreateWithoutTiendaInput[] | CategoriaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutTiendaInput | CategoriaCreateOrConnectWithoutTiendaInput[]
    createMany?: CategoriaCreateManyTiendaInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type ProductoCreateNestedManyWithoutTiendaInput = {
    create?: XOR<ProductoCreateWithoutTiendaInput, ProductoUncheckedCreateWithoutTiendaInput> | ProductoCreateWithoutTiendaInput[] | ProductoUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutTiendaInput | ProductoCreateOrConnectWithoutTiendaInput[]
    createMany?: ProductoCreateManyTiendaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type PromocionCreateNestedManyWithoutTiendaInput = {
    create?: XOR<PromocionCreateWithoutTiendaInput, PromocionUncheckedCreateWithoutTiendaInput> | PromocionCreateWithoutTiendaInput[] | PromocionUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutTiendaInput | PromocionCreateOrConnectWithoutTiendaInput[]
    createMany?: PromocionCreateManyTiendaInputEnvelope
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
  }

  export type QrCreateNestedManyWithoutTiendaInput = {
    create?: XOR<QrCreateWithoutTiendaInput, QrUncheckedCreateWithoutTiendaInput> | QrCreateWithoutTiendaInput[] | QrUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: QrCreateOrConnectWithoutTiendaInput | QrCreateOrConnectWithoutTiendaInput[]
    createMany?: QrCreateManyTiendaInputEnvelope
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutTiendaInput = {
    create?: XOR<TokenCreateWithoutTiendaInput, TokenUncheckedCreateWithoutTiendaInput> | TokenCreateWithoutTiendaInput[] | TokenUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutTiendaInput | TokenCreateOrConnectWithoutTiendaInput[]
    createMany?: TokenCreateManyTiendaInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput = {
    create?: XOR<ClienteTiendaCreateWithoutTiendaInput, ClienteTiendaUncheckedCreateWithoutTiendaInput> | ClienteTiendaCreateWithoutTiendaInput[] | ClienteTiendaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutTiendaInput | ClienteTiendaCreateOrConnectWithoutTiendaInput[]
    createMany?: ClienteTiendaCreateManyTiendaInputEnvelope
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutTiendaInput = {
    create?: XOR<CategoriaCreateWithoutTiendaInput, CategoriaUncheckedCreateWithoutTiendaInput> | CategoriaCreateWithoutTiendaInput[] | CategoriaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutTiendaInput | CategoriaCreateOrConnectWithoutTiendaInput[]
    createMany?: CategoriaCreateManyTiendaInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutTiendaInput = {
    create?: XOR<ProductoCreateWithoutTiendaInput, ProductoUncheckedCreateWithoutTiendaInput> | ProductoCreateWithoutTiendaInput[] | ProductoUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutTiendaInput | ProductoCreateOrConnectWithoutTiendaInput[]
    createMany?: ProductoCreateManyTiendaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type PromocionUncheckedCreateNestedManyWithoutTiendaInput = {
    create?: XOR<PromocionCreateWithoutTiendaInput, PromocionUncheckedCreateWithoutTiendaInput> | PromocionCreateWithoutTiendaInput[] | PromocionUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutTiendaInput | PromocionCreateOrConnectWithoutTiendaInput[]
    createMany?: PromocionCreateManyTiendaInputEnvelope
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
  }

  export type QrUncheckedCreateNestedManyWithoutTiendaInput = {
    create?: XOR<QrCreateWithoutTiendaInput, QrUncheckedCreateWithoutTiendaInput> | QrCreateWithoutTiendaInput[] | QrUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: QrCreateOrConnectWithoutTiendaInput | QrCreateOrConnectWithoutTiendaInput[]
    createMany?: QrCreateManyTiendaInputEnvelope
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutTiendaInput = {
    create?: XOR<TokenCreateWithoutTiendaInput, TokenUncheckedCreateWithoutTiendaInput> | TokenCreateWithoutTiendaInput[] | TokenUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutTiendaInput | TokenCreateOrConnectWithoutTiendaInput[]
    createMany?: TokenCreateManyTiendaInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ClienteTiendaUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<ClienteTiendaCreateWithoutTiendaInput, ClienteTiendaUncheckedCreateWithoutTiendaInput> | ClienteTiendaCreateWithoutTiendaInput[] | ClienteTiendaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutTiendaInput | ClienteTiendaCreateOrConnectWithoutTiendaInput[]
    upsert?: ClienteTiendaUpsertWithWhereUniqueWithoutTiendaInput | ClienteTiendaUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: ClienteTiendaCreateManyTiendaInputEnvelope
    set?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    disconnect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    delete?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    update?: ClienteTiendaUpdateWithWhereUniqueWithoutTiendaInput | ClienteTiendaUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: ClienteTiendaUpdateManyWithWhereWithoutTiendaInput | ClienteTiendaUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: ClienteTiendaScalarWhereInput | ClienteTiendaScalarWhereInput[]
  }

  export type CategoriaUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<CategoriaCreateWithoutTiendaInput, CategoriaUncheckedCreateWithoutTiendaInput> | CategoriaCreateWithoutTiendaInput[] | CategoriaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutTiendaInput | CategoriaCreateOrConnectWithoutTiendaInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutTiendaInput | CategoriaUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: CategoriaCreateManyTiendaInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutTiendaInput | CategoriaUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutTiendaInput | CategoriaUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type ProductoUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<ProductoCreateWithoutTiendaInput, ProductoUncheckedCreateWithoutTiendaInput> | ProductoCreateWithoutTiendaInput[] | ProductoUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutTiendaInput | ProductoCreateOrConnectWithoutTiendaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutTiendaInput | ProductoUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: ProductoCreateManyTiendaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutTiendaInput | ProductoUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutTiendaInput | ProductoUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type PromocionUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<PromocionCreateWithoutTiendaInput, PromocionUncheckedCreateWithoutTiendaInput> | PromocionCreateWithoutTiendaInput[] | PromocionUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutTiendaInput | PromocionCreateOrConnectWithoutTiendaInput[]
    upsert?: PromocionUpsertWithWhereUniqueWithoutTiendaInput | PromocionUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: PromocionCreateManyTiendaInputEnvelope
    set?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    disconnect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    delete?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    update?: PromocionUpdateWithWhereUniqueWithoutTiendaInput | PromocionUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: PromocionUpdateManyWithWhereWithoutTiendaInput | PromocionUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
  }

  export type QrUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<QrCreateWithoutTiendaInput, QrUncheckedCreateWithoutTiendaInput> | QrCreateWithoutTiendaInput[] | QrUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: QrCreateOrConnectWithoutTiendaInput | QrCreateOrConnectWithoutTiendaInput[]
    upsert?: QrUpsertWithWhereUniqueWithoutTiendaInput | QrUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: QrCreateManyTiendaInputEnvelope
    set?: QrWhereUniqueInput | QrWhereUniqueInput[]
    disconnect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    delete?: QrWhereUniqueInput | QrWhereUniqueInput[]
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    update?: QrUpdateWithWhereUniqueWithoutTiendaInput | QrUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: QrUpdateManyWithWhereWithoutTiendaInput | QrUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: QrScalarWhereInput | QrScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<TokenCreateWithoutTiendaInput, TokenUncheckedCreateWithoutTiendaInput> | TokenCreateWithoutTiendaInput[] | TokenUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutTiendaInput | TokenCreateOrConnectWithoutTiendaInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutTiendaInput | TokenUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: TokenCreateManyTiendaInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutTiendaInput | TokenUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutTiendaInput | TokenUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<ClienteTiendaCreateWithoutTiendaInput, ClienteTiendaUncheckedCreateWithoutTiendaInput> | ClienteTiendaCreateWithoutTiendaInput[] | ClienteTiendaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ClienteTiendaCreateOrConnectWithoutTiendaInput | ClienteTiendaCreateOrConnectWithoutTiendaInput[]
    upsert?: ClienteTiendaUpsertWithWhereUniqueWithoutTiendaInput | ClienteTiendaUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: ClienteTiendaCreateManyTiendaInputEnvelope
    set?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    disconnect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    delete?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    connect?: ClienteTiendaWhereUniqueInput | ClienteTiendaWhereUniqueInput[]
    update?: ClienteTiendaUpdateWithWhereUniqueWithoutTiendaInput | ClienteTiendaUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: ClienteTiendaUpdateManyWithWhereWithoutTiendaInput | ClienteTiendaUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: ClienteTiendaScalarWhereInput | ClienteTiendaScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<CategoriaCreateWithoutTiendaInput, CategoriaUncheckedCreateWithoutTiendaInput> | CategoriaCreateWithoutTiendaInput[] | CategoriaUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutTiendaInput | CategoriaCreateOrConnectWithoutTiendaInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutTiendaInput | CategoriaUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: CategoriaCreateManyTiendaInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutTiendaInput | CategoriaUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutTiendaInput | CategoriaUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<ProductoCreateWithoutTiendaInput, ProductoUncheckedCreateWithoutTiendaInput> | ProductoCreateWithoutTiendaInput[] | ProductoUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutTiendaInput | ProductoCreateOrConnectWithoutTiendaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutTiendaInput | ProductoUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: ProductoCreateManyTiendaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutTiendaInput | ProductoUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutTiendaInput | ProductoUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type PromocionUncheckedUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<PromocionCreateWithoutTiendaInput, PromocionUncheckedCreateWithoutTiendaInput> | PromocionCreateWithoutTiendaInput[] | PromocionUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutTiendaInput | PromocionCreateOrConnectWithoutTiendaInput[]
    upsert?: PromocionUpsertWithWhereUniqueWithoutTiendaInput | PromocionUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: PromocionCreateManyTiendaInputEnvelope
    set?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    disconnect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    delete?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    update?: PromocionUpdateWithWhereUniqueWithoutTiendaInput | PromocionUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: PromocionUpdateManyWithWhereWithoutTiendaInput | PromocionUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
  }

  export type QrUncheckedUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<QrCreateWithoutTiendaInput, QrUncheckedCreateWithoutTiendaInput> | QrCreateWithoutTiendaInput[] | QrUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: QrCreateOrConnectWithoutTiendaInput | QrCreateOrConnectWithoutTiendaInput[]
    upsert?: QrUpsertWithWhereUniqueWithoutTiendaInput | QrUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: QrCreateManyTiendaInputEnvelope
    set?: QrWhereUniqueInput | QrWhereUniqueInput[]
    disconnect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    delete?: QrWhereUniqueInput | QrWhereUniqueInput[]
    connect?: QrWhereUniqueInput | QrWhereUniqueInput[]
    update?: QrUpdateWithWhereUniqueWithoutTiendaInput | QrUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: QrUpdateManyWithWhereWithoutTiendaInput | QrUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: QrScalarWhereInput | QrScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutTiendaNestedInput = {
    create?: XOR<TokenCreateWithoutTiendaInput, TokenUncheckedCreateWithoutTiendaInput> | TokenCreateWithoutTiendaInput[] | TokenUncheckedCreateWithoutTiendaInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutTiendaInput | TokenCreateOrConnectWithoutTiendaInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutTiendaInput | TokenUpsertWithWhereUniqueWithoutTiendaInput[]
    createMany?: TokenCreateManyTiendaInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutTiendaInput | TokenUpdateWithWhereUniqueWithoutTiendaInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutTiendaInput | TokenUpdateManyWithWhereWithoutTiendaInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutTiendasInput = {
    create?: XOR<ClienteCreateWithoutTiendasInput, ClienteUncheckedCreateWithoutTiendasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTiendasInput
    connect?: ClienteWhereUniqueInput
  }

  export type TiendaCreateNestedOneWithoutClientesInput = {
    create?: XOR<TiendaCreateWithoutClientesInput, TiendaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutClientesInput
    connect?: TiendaWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutTiendasNestedInput = {
    create?: XOR<ClienteCreateWithoutTiendasInput, ClienteUncheckedCreateWithoutTiendasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTiendasInput
    upsert?: ClienteUpsertWithoutTiendasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutTiendasInput, ClienteUpdateWithoutTiendasInput>, ClienteUncheckedUpdateWithoutTiendasInput>
  }

  export type TiendaUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<TiendaCreateWithoutClientesInput, TiendaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutClientesInput
    upsert?: TiendaUpsertWithoutClientesInput
    connect?: TiendaWhereUniqueInput
    update?: XOR<XOR<TiendaUpdateToOneWithWhereWithoutClientesInput, TiendaUpdateWithoutClientesInput>, TiendaUncheckedUpdateWithoutClientesInput>
  }

  export type TiendaCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<TiendaCreateWithoutCategoriasInput, TiendaUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutCategoriasInput
    connect?: TiendaWhereUniqueInput
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type TiendaUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: XOR<TiendaCreateWithoutCategoriasInput, TiendaUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutCategoriasInput
    upsert?: TiendaUpsertWithoutCategoriasInput
    connect?: TiendaWhereUniqueInput
    update?: XOR<XOR<TiendaUpdateToOneWithWhereWithoutCategoriasInput, TiendaUpdateWithoutCategoriasInput>, TiendaUncheckedUpdateWithoutCategoriasInput>
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type TiendaCreateNestedOneWithoutProductosInput = {
    create?: XOR<TiendaCreateWithoutProductosInput, TiendaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutProductosInput
    connect?: TiendaWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type PromocionCreateNestedManyWithoutProductoInput = {
    create?: XOR<PromocionCreateWithoutProductoInput, PromocionUncheckedCreateWithoutProductoInput> | PromocionCreateWithoutProductoInput[] | PromocionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutProductoInput | PromocionCreateOrConnectWithoutProductoInput[]
    createMany?: PromocionCreateManyProductoInputEnvelope
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
  }

  export type PromocionUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<PromocionCreateWithoutProductoInput, PromocionUncheckedCreateWithoutProductoInput> | PromocionCreateWithoutProductoInput[] | PromocionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutProductoInput | PromocionCreateOrConnectWithoutProductoInput[]
    createMany?: PromocionCreateManyProductoInputEnvelope
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TiendaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<TiendaCreateWithoutProductosInput, TiendaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutProductosInput
    upsert?: TiendaUpsertWithoutProductosInput
    connect?: TiendaWhereUniqueInput
    update?: XOR<XOR<TiendaUpdateToOneWithWhereWithoutProductosInput, TiendaUpdateWithoutProductosInput>, TiendaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateOneWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type PromocionUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PromocionCreateWithoutProductoInput, PromocionUncheckedCreateWithoutProductoInput> | PromocionCreateWithoutProductoInput[] | PromocionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutProductoInput | PromocionCreateOrConnectWithoutProductoInput[]
    upsert?: PromocionUpsertWithWhereUniqueWithoutProductoInput | PromocionUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PromocionCreateManyProductoInputEnvelope
    set?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    disconnect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    delete?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    update?: PromocionUpdateWithWhereUniqueWithoutProductoInput | PromocionUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PromocionUpdateManyWithWhereWithoutProductoInput | PromocionUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
  }

  export type PromocionUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PromocionCreateWithoutProductoInput, PromocionUncheckedCreateWithoutProductoInput> | PromocionCreateWithoutProductoInput[] | PromocionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutProductoInput | PromocionCreateOrConnectWithoutProductoInput[]
    upsert?: PromocionUpsertWithWhereUniqueWithoutProductoInput | PromocionUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PromocionCreateManyProductoInputEnvelope
    set?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    disconnect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    delete?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    update?: PromocionUpdateWithWhereUniqueWithoutProductoInput | PromocionUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PromocionUpdateManyWithWhereWithoutProductoInput | PromocionUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
  }

  export type TiendaCreateNestedOneWithoutPromocionesInput = {
    create?: XOR<TiendaCreateWithoutPromocionesInput, TiendaUncheckedCreateWithoutPromocionesInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutPromocionesInput
    connect?: TiendaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutPromocionesInput = {
    create?: XOR<ProductoCreateWithoutPromocionesInput, ProductoUncheckedCreateWithoutPromocionesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPromocionesInput
    connect?: ProductoWhereUniqueInput
  }

  export type RecompensaCreateNestedOneWithoutPromocionInput = {
    create?: XOR<RecompensaCreateWithoutPromocionInput, RecompensaUncheckedCreateWithoutPromocionInput>
    connectOrCreate?: RecompensaCreateOrConnectWithoutPromocionInput
    connect?: RecompensaWhereUniqueInput
  }

  export type AcumulacionCreateNestedManyWithoutPromocionInput = {
    create?: XOR<AcumulacionCreateWithoutPromocionInput, AcumulacionUncheckedCreateWithoutPromocionInput> | AcumulacionCreateWithoutPromocionInput[] | AcumulacionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutPromocionInput | AcumulacionCreateOrConnectWithoutPromocionInput[]
    createMany?: AcumulacionCreateManyPromocionInputEnvelope
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
  }

  export type ProgresoPromocionCreateNestedManyWithoutPromocionInput = {
    create?: XOR<ProgresoPromocionCreateWithoutPromocionInput, ProgresoPromocionUncheckedCreateWithoutPromocionInput> | ProgresoPromocionCreateWithoutPromocionInput[] | ProgresoPromocionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutPromocionInput | ProgresoPromocionCreateOrConnectWithoutPromocionInput[]
    createMany?: ProgresoPromocionCreateManyPromocionInputEnvelope
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
  }

  export type RecompensaUncheckedCreateNestedOneWithoutPromocionInput = {
    create?: XOR<RecompensaCreateWithoutPromocionInput, RecompensaUncheckedCreateWithoutPromocionInput>
    connectOrCreate?: RecompensaCreateOrConnectWithoutPromocionInput
    connect?: RecompensaWhereUniqueInput
  }

  export type AcumulacionUncheckedCreateNestedManyWithoutPromocionInput = {
    create?: XOR<AcumulacionCreateWithoutPromocionInput, AcumulacionUncheckedCreateWithoutPromocionInput> | AcumulacionCreateWithoutPromocionInput[] | AcumulacionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutPromocionInput | AcumulacionCreateOrConnectWithoutPromocionInput[]
    createMany?: AcumulacionCreateManyPromocionInputEnvelope
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
  }

  export type ProgresoPromocionUncheckedCreateNestedManyWithoutPromocionInput = {
    create?: XOR<ProgresoPromocionCreateWithoutPromocionInput, ProgresoPromocionUncheckedCreateWithoutPromocionInput> | ProgresoPromocionCreateWithoutPromocionInput[] | ProgresoPromocionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutPromocionInput | ProgresoPromocionCreateOrConnectWithoutPromocionInput[]
    createMany?: ProgresoPromocionCreateManyPromocionInputEnvelope
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TiendaUpdateOneRequiredWithoutPromocionesNestedInput = {
    create?: XOR<TiendaCreateWithoutPromocionesInput, TiendaUncheckedCreateWithoutPromocionesInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutPromocionesInput
    upsert?: TiendaUpsertWithoutPromocionesInput
    connect?: TiendaWhereUniqueInput
    update?: XOR<XOR<TiendaUpdateToOneWithWhereWithoutPromocionesInput, TiendaUpdateWithoutPromocionesInput>, TiendaUncheckedUpdateWithoutPromocionesInput>
  }

  export type ProductoUpdateOneRequiredWithoutPromocionesNestedInput = {
    create?: XOR<ProductoCreateWithoutPromocionesInput, ProductoUncheckedCreateWithoutPromocionesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPromocionesInput
    upsert?: ProductoUpsertWithoutPromocionesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutPromocionesInput, ProductoUpdateWithoutPromocionesInput>, ProductoUncheckedUpdateWithoutPromocionesInput>
  }

  export type RecompensaUpdateOneWithoutPromocionNestedInput = {
    create?: XOR<RecompensaCreateWithoutPromocionInput, RecompensaUncheckedCreateWithoutPromocionInput>
    connectOrCreate?: RecompensaCreateOrConnectWithoutPromocionInput
    upsert?: RecompensaUpsertWithoutPromocionInput
    disconnect?: RecompensaWhereInput | boolean
    delete?: RecompensaWhereInput | boolean
    connect?: RecompensaWhereUniqueInput
    update?: XOR<XOR<RecompensaUpdateToOneWithWhereWithoutPromocionInput, RecompensaUpdateWithoutPromocionInput>, RecompensaUncheckedUpdateWithoutPromocionInput>
  }

  export type AcumulacionUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<AcumulacionCreateWithoutPromocionInput, AcumulacionUncheckedCreateWithoutPromocionInput> | AcumulacionCreateWithoutPromocionInput[] | AcumulacionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutPromocionInput | AcumulacionCreateOrConnectWithoutPromocionInput[]
    upsert?: AcumulacionUpsertWithWhereUniqueWithoutPromocionInput | AcumulacionUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: AcumulacionCreateManyPromocionInputEnvelope
    set?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    disconnect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    delete?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    update?: AcumulacionUpdateWithWhereUniqueWithoutPromocionInput | AcumulacionUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: AcumulacionUpdateManyWithWhereWithoutPromocionInput | AcumulacionUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
  }

  export type ProgresoPromocionUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<ProgresoPromocionCreateWithoutPromocionInput, ProgresoPromocionUncheckedCreateWithoutPromocionInput> | ProgresoPromocionCreateWithoutPromocionInput[] | ProgresoPromocionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutPromocionInput | ProgresoPromocionCreateOrConnectWithoutPromocionInput[]
    upsert?: ProgresoPromocionUpsertWithWhereUniqueWithoutPromocionInput | ProgresoPromocionUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: ProgresoPromocionCreateManyPromocionInputEnvelope
    set?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    disconnect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    delete?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    update?: ProgresoPromocionUpdateWithWhereUniqueWithoutPromocionInput | ProgresoPromocionUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: ProgresoPromocionUpdateManyWithWhereWithoutPromocionInput | ProgresoPromocionUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: ProgresoPromocionScalarWhereInput | ProgresoPromocionScalarWhereInput[]
  }

  export type RecompensaUncheckedUpdateOneWithoutPromocionNestedInput = {
    create?: XOR<RecompensaCreateWithoutPromocionInput, RecompensaUncheckedCreateWithoutPromocionInput>
    connectOrCreate?: RecompensaCreateOrConnectWithoutPromocionInput
    upsert?: RecompensaUpsertWithoutPromocionInput
    disconnect?: RecompensaWhereInput | boolean
    delete?: RecompensaWhereInput | boolean
    connect?: RecompensaWhereUniqueInput
    update?: XOR<XOR<RecompensaUpdateToOneWithWhereWithoutPromocionInput, RecompensaUpdateWithoutPromocionInput>, RecompensaUncheckedUpdateWithoutPromocionInput>
  }

  export type AcumulacionUncheckedUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<AcumulacionCreateWithoutPromocionInput, AcumulacionUncheckedCreateWithoutPromocionInput> | AcumulacionCreateWithoutPromocionInput[] | AcumulacionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutPromocionInput | AcumulacionCreateOrConnectWithoutPromocionInput[]
    upsert?: AcumulacionUpsertWithWhereUniqueWithoutPromocionInput | AcumulacionUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: AcumulacionCreateManyPromocionInputEnvelope
    set?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    disconnect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    delete?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    update?: AcumulacionUpdateWithWhereUniqueWithoutPromocionInput | AcumulacionUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: AcumulacionUpdateManyWithWhereWithoutPromocionInput | AcumulacionUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
  }

  export type ProgresoPromocionUncheckedUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<ProgresoPromocionCreateWithoutPromocionInput, ProgresoPromocionUncheckedCreateWithoutPromocionInput> | ProgresoPromocionCreateWithoutPromocionInput[] | ProgresoPromocionUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProgresoPromocionCreateOrConnectWithoutPromocionInput | ProgresoPromocionCreateOrConnectWithoutPromocionInput[]
    upsert?: ProgresoPromocionUpsertWithWhereUniqueWithoutPromocionInput | ProgresoPromocionUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: ProgresoPromocionCreateManyPromocionInputEnvelope
    set?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    disconnect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    delete?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    connect?: ProgresoPromocionWhereUniqueInput | ProgresoPromocionWhereUniqueInput[]
    update?: ProgresoPromocionUpdateWithWhereUniqueWithoutPromocionInput | ProgresoPromocionUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: ProgresoPromocionUpdateManyWithWhereWithoutPromocionInput | ProgresoPromocionUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: ProgresoPromocionScalarWhereInput | ProgresoPromocionScalarWhereInput[]
  }

  export type PromocionCreateNestedOneWithoutRecompensaInput = {
    create?: XOR<PromocionCreateWithoutRecompensaInput, PromocionUncheckedCreateWithoutRecompensaInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutRecompensaInput
    connect?: PromocionWhereUniqueInput
  }

  export type CanjeCreateNestedManyWithoutRecompensaInput = {
    create?: XOR<CanjeCreateWithoutRecompensaInput, CanjeUncheckedCreateWithoutRecompensaInput> | CanjeCreateWithoutRecompensaInput[] | CanjeUncheckedCreateWithoutRecompensaInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutRecompensaInput | CanjeCreateOrConnectWithoutRecompensaInput[]
    createMany?: CanjeCreateManyRecompensaInputEnvelope
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
  }

  export type CanjeUncheckedCreateNestedManyWithoutRecompensaInput = {
    create?: XOR<CanjeCreateWithoutRecompensaInput, CanjeUncheckedCreateWithoutRecompensaInput> | CanjeCreateWithoutRecompensaInput[] | CanjeUncheckedCreateWithoutRecompensaInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutRecompensaInput | CanjeCreateOrConnectWithoutRecompensaInput[]
    createMany?: CanjeCreateManyRecompensaInputEnvelope
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PromocionUpdateOneRequiredWithoutRecompensaNestedInput = {
    create?: XOR<PromocionCreateWithoutRecompensaInput, PromocionUncheckedCreateWithoutRecompensaInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutRecompensaInput
    upsert?: PromocionUpsertWithoutRecompensaInput
    connect?: PromocionWhereUniqueInput
    update?: XOR<XOR<PromocionUpdateToOneWithWhereWithoutRecompensaInput, PromocionUpdateWithoutRecompensaInput>, PromocionUncheckedUpdateWithoutRecompensaInput>
  }

  export type CanjeUpdateManyWithoutRecompensaNestedInput = {
    create?: XOR<CanjeCreateWithoutRecompensaInput, CanjeUncheckedCreateWithoutRecompensaInput> | CanjeCreateWithoutRecompensaInput[] | CanjeUncheckedCreateWithoutRecompensaInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutRecompensaInput | CanjeCreateOrConnectWithoutRecompensaInput[]
    upsert?: CanjeUpsertWithWhereUniqueWithoutRecompensaInput | CanjeUpsertWithWhereUniqueWithoutRecompensaInput[]
    createMany?: CanjeCreateManyRecompensaInputEnvelope
    set?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    disconnect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    delete?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    update?: CanjeUpdateWithWhereUniqueWithoutRecompensaInput | CanjeUpdateWithWhereUniqueWithoutRecompensaInput[]
    updateMany?: CanjeUpdateManyWithWhereWithoutRecompensaInput | CanjeUpdateManyWithWhereWithoutRecompensaInput[]
    deleteMany?: CanjeScalarWhereInput | CanjeScalarWhereInput[]
  }

  export type CanjeUncheckedUpdateManyWithoutRecompensaNestedInput = {
    create?: XOR<CanjeCreateWithoutRecompensaInput, CanjeUncheckedCreateWithoutRecompensaInput> | CanjeCreateWithoutRecompensaInput[] | CanjeUncheckedCreateWithoutRecompensaInput[]
    connectOrCreate?: CanjeCreateOrConnectWithoutRecompensaInput | CanjeCreateOrConnectWithoutRecompensaInput[]
    upsert?: CanjeUpsertWithWhereUniqueWithoutRecompensaInput | CanjeUpsertWithWhereUniqueWithoutRecompensaInput[]
    createMany?: CanjeCreateManyRecompensaInputEnvelope
    set?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    disconnect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    delete?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    connect?: CanjeWhereUniqueInput | CanjeWhereUniqueInput[]
    update?: CanjeUpdateWithWhereUniqueWithoutRecompensaInput | CanjeUpdateWithWhereUniqueWithoutRecompensaInput[]
    updateMany?: CanjeUpdateManyWithWhereWithoutRecompensaInput | CanjeUpdateManyWithWhereWithoutRecompensaInput[]
    deleteMany?: CanjeScalarWhereInput | CanjeScalarWhereInput[]
  }

  export type TiendaCreateNestedOneWithoutQrsInput = {
    create?: XOR<TiendaCreateWithoutQrsInput, TiendaUncheckedCreateWithoutQrsInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutQrsInput
    connect?: TiendaWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutQrsInput = {
    create?: XOR<ClienteCreateWithoutQrsInput, ClienteUncheckedCreateWithoutQrsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutQrsInput
    connect?: ClienteWhereUniqueInput
  }

  export type AcumulacionCreateNestedManyWithoutQrInput = {
    create?: XOR<AcumulacionCreateWithoutQrInput, AcumulacionUncheckedCreateWithoutQrInput> | AcumulacionCreateWithoutQrInput[] | AcumulacionUncheckedCreateWithoutQrInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutQrInput | AcumulacionCreateOrConnectWithoutQrInput[]
    createMany?: AcumulacionCreateManyQrInputEnvelope
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
  }

  export type AcumulacionUncheckedCreateNestedManyWithoutQrInput = {
    create?: XOR<AcumulacionCreateWithoutQrInput, AcumulacionUncheckedCreateWithoutQrInput> | AcumulacionCreateWithoutQrInput[] | AcumulacionUncheckedCreateWithoutQrInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutQrInput | AcumulacionCreateOrConnectWithoutQrInput[]
    createMany?: AcumulacionCreateManyQrInputEnvelope
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
  }

  export type TiendaUpdateOneRequiredWithoutQrsNestedInput = {
    create?: XOR<TiendaCreateWithoutQrsInput, TiendaUncheckedCreateWithoutQrsInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutQrsInput
    upsert?: TiendaUpsertWithoutQrsInput
    connect?: TiendaWhereUniqueInput
    update?: XOR<XOR<TiendaUpdateToOneWithWhereWithoutQrsInput, TiendaUpdateWithoutQrsInput>, TiendaUncheckedUpdateWithoutQrsInput>
  }

  export type ClienteUpdateOneRequiredWithoutQrsNestedInput = {
    create?: XOR<ClienteCreateWithoutQrsInput, ClienteUncheckedCreateWithoutQrsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutQrsInput
    upsert?: ClienteUpsertWithoutQrsInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutQrsInput, ClienteUpdateWithoutQrsInput>, ClienteUncheckedUpdateWithoutQrsInput>
  }

  export type AcumulacionUpdateManyWithoutQrNestedInput = {
    create?: XOR<AcumulacionCreateWithoutQrInput, AcumulacionUncheckedCreateWithoutQrInput> | AcumulacionCreateWithoutQrInput[] | AcumulacionUncheckedCreateWithoutQrInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutQrInput | AcumulacionCreateOrConnectWithoutQrInput[]
    upsert?: AcumulacionUpsertWithWhereUniqueWithoutQrInput | AcumulacionUpsertWithWhereUniqueWithoutQrInput[]
    createMany?: AcumulacionCreateManyQrInputEnvelope
    set?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    disconnect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    delete?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    update?: AcumulacionUpdateWithWhereUniqueWithoutQrInput | AcumulacionUpdateWithWhereUniqueWithoutQrInput[]
    updateMany?: AcumulacionUpdateManyWithWhereWithoutQrInput | AcumulacionUpdateManyWithWhereWithoutQrInput[]
    deleteMany?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
  }

  export type AcumulacionUncheckedUpdateManyWithoutQrNestedInput = {
    create?: XOR<AcumulacionCreateWithoutQrInput, AcumulacionUncheckedCreateWithoutQrInput> | AcumulacionCreateWithoutQrInput[] | AcumulacionUncheckedCreateWithoutQrInput[]
    connectOrCreate?: AcumulacionCreateOrConnectWithoutQrInput | AcumulacionCreateOrConnectWithoutQrInput[]
    upsert?: AcumulacionUpsertWithWhereUniqueWithoutQrInput | AcumulacionUpsertWithWhereUniqueWithoutQrInput[]
    createMany?: AcumulacionCreateManyQrInputEnvelope
    set?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    disconnect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    delete?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    connect?: AcumulacionWhereUniqueInput | AcumulacionWhereUniqueInput[]
    update?: AcumulacionUpdateWithWhereUniqueWithoutQrInput | AcumulacionUpdateWithWhereUniqueWithoutQrInput[]
    updateMany?: AcumulacionUpdateManyWithWhereWithoutQrInput | AcumulacionUpdateManyWithWhereWithoutQrInput[]
    deleteMany?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutAcumulacionesInput = {
    create?: XOR<ClienteCreateWithoutAcumulacionesInput, ClienteUncheckedCreateWithoutAcumulacionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAcumulacionesInput
    connect?: ClienteWhereUniqueInput
  }

  export type PromocionCreateNestedOneWithoutAcumulacionesInput = {
    create?: XOR<PromocionCreateWithoutAcumulacionesInput, PromocionUncheckedCreateWithoutAcumulacionesInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutAcumulacionesInput
    connect?: PromocionWhereUniqueInput
  }

  export type QrCreateNestedOneWithoutAcumulacionesInput = {
    create?: XOR<QrCreateWithoutAcumulacionesInput, QrUncheckedCreateWithoutAcumulacionesInput>
    connectOrCreate?: QrCreateOrConnectWithoutAcumulacionesInput
    connect?: QrWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutAcumulacionesNestedInput = {
    create?: XOR<ClienteCreateWithoutAcumulacionesInput, ClienteUncheckedCreateWithoutAcumulacionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAcumulacionesInput
    upsert?: ClienteUpsertWithoutAcumulacionesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAcumulacionesInput, ClienteUpdateWithoutAcumulacionesInput>, ClienteUncheckedUpdateWithoutAcumulacionesInput>
  }

  export type PromocionUpdateOneRequiredWithoutAcumulacionesNestedInput = {
    create?: XOR<PromocionCreateWithoutAcumulacionesInput, PromocionUncheckedCreateWithoutAcumulacionesInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutAcumulacionesInput
    upsert?: PromocionUpsertWithoutAcumulacionesInput
    connect?: PromocionWhereUniqueInput
    update?: XOR<XOR<PromocionUpdateToOneWithWhereWithoutAcumulacionesInput, PromocionUpdateWithoutAcumulacionesInput>, PromocionUncheckedUpdateWithoutAcumulacionesInput>
  }

  export type QrUpdateOneWithoutAcumulacionesNestedInput = {
    create?: XOR<QrCreateWithoutAcumulacionesInput, QrUncheckedCreateWithoutAcumulacionesInput>
    connectOrCreate?: QrCreateOrConnectWithoutAcumulacionesInput
    upsert?: QrUpsertWithoutAcumulacionesInput
    disconnect?: QrWhereInput | boolean
    delete?: QrWhereInput | boolean
    connect?: QrWhereUniqueInput
    update?: XOR<XOR<QrUpdateToOneWithWhereWithoutAcumulacionesInput, QrUpdateWithoutAcumulacionesInput>, QrUncheckedUpdateWithoutAcumulacionesInput>
  }

  export type ClienteCreateNestedOneWithoutProgresosInput = {
    create?: XOR<ClienteCreateWithoutProgresosInput, ClienteUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutProgresosInput
    connect?: ClienteWhereUniqueInput
  }

  export type PromocionCreateNestedOneWithoutProgresosInput = {
    create?: XOR<PromocionCreateWithoutProgresosInput, PromocionUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutProgresosInput
    connect?: PromocionWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<ClienteCreateWithoutProgresosInput, ClienteUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutProgresosInput
    upsert?: ClienteUpsertWithoutProgresosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutProgresosInput, ClienteUpdateWithoutProgresosInput>, ClienteUncheckedUpdateWithoutProgresosInput>
  }

  export type PromocionUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<PromocionCreateWithoutProgresosInput, PromocionUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutProgresosInput
    upsert?: PromocionUpsertWithoutProgresosInput
    connect?: PromocionWhereUniqueInput
    update?: XOR<XOR<PromocionUpdateToOneWithWhereWithoutProgresosInput, PromocionUpdateWithoutProgresosInput>, PromocionUncheckedUpdateWithoutProgresosInput>
  }

  export type ClienteCreateNestedOneWithoutCanjesInput = {
    create?: XOR<ClienteCreateWithoutCanjesInput, ClienteUncheckedCreateWithoutCanjesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCanjesInput
    connect?: ClienteWhereUniqueInput
  }

  export type RecompensaCreateNestedOneWithoutCanjesInput = {
    create?: XOR<RecompensaCreateWithoutCanjesInput, RecompensaUncheckedCreateWithoutCanjesInput>
    connectOrCreate?: RecompensaCreateOrConnectWithoutCanjesInput
    connect?: RecompensaWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutCanjesNestedInput = {
    create?: XOR<ClienteCreateWithoutCanjesInput, ClienteUncheckedCreateWithoutCanjesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCanjesInput
    upsert?: ClienteUpsertWithoutCanjesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutCanjesInput, ClienteUpdateWithoutCanjesInput>, ClienteUncheckedUpdateWithoutCanjesInput>
  }

  export type RecompensaUpdateOneRequiredWithoutCanjesNestedInput = {
    create?: XOR<RecompensaCreateWithoutCanjesInput, RecompensaUncheckedCreateWithoutCanjesInput>
    connectOrCreate?: RecompensaCreateOrConnectWithoutCanjesInput
    upsert?: RecompensaUpsertWithoutCanjesInput
    connect?: RecompensaWhereUniqueInput
    update?: XOR<XOR<RecompensaUpdateToOneWithWhereWithoutCanjesInput, RecompensaUpdateWithoutCanjesInput>, RecompensaUncheckedUpdateWithoutCanjesInput>
  }

  export type ClienteCreateNestedOneWithoutTokensInput = {
    create?: XOR<ClienteCreateWithoutTokensInput, ClienteUncheckedCreateWithoutTokensInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTokensInput
    connect?: ClienteWhereUniqueInput
  }

  export type TiendaCreateNestedOneWithoutTokensInput = {
    create?: XOR<TiendaCreateWithoutTokensInput, TiendaUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutTokensInput
    connect?: TiendaWhereUniqueInput
  }

  export type ClienteUpdateOneWithoutTokensNestedInput = {
    create?: XOR<ClienteCreateWithoutTokensInput, ClienteUncheckedCreateWithoutTokensInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTokensInput
    upsert?: ClienteUpsertWithoutTokensInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutTokensInput, ClienteUpdateWithoutTokensInput>, ClienteUncheckedUpdateWithoutTokensInput>
  }

  export type TiendaUpdateOneWithoutTokensNestedInput = {
    create?: XOR<TiendaCreateWithoutTokensInput, TiendaUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TiendaCreateOrConnectWithoutTokensInput
    upsert?: TiendaUpsertWithoutTokensInput
    disconnect?: TiendaWhereInput | boolean
    delete?: TiendaWhereInput | boolean
    connect?: TiendaWhereUniqueInput
    update?: XOR<XOR<TiendaUpdateToOneWithWhereWithoutTokensInput, TiendaUpdateWithoutTokensInput>, TiendaUncheckedUpdateWithoutTokensInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ClienteTiendaCreateWithoutClienteInput = {
    fechaRegistro?: Date | string
    estado?: string | null
    tienda: TiendaCreateNestedOneWithoutClientesInput
  }

  export type ClienteTiendaUncheckedCreateWithoutClienteInput = {
    idTienda: string
    fechaRegistro?: Date | string
    estado?: string | null
  }

  export type ClienteTiendaCreateOrConnectWithoutClienteInput = {
    where: ClienteTiendaWhereUniqueInput
    create: XOR<ClienteTiendaCreateWithoutClienteInput, ClienteTiendaUncheckedCreateWithoutClienteInput>
  }

  export type ClienteTiendaCreateManyClienteInputEnvelope = {
    data: ClienteTiendaCreateManyClienteInput | ClienteTiendaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type QrCreateWithoutClienteInput = {
    id?: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    tienda: TiendaCreateNestedOneWithoutQrsInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutQrInput
  }

  export type QrUncheckedCreateWithoutClienteInput = {
    id?: string
    idTienda: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutQrInput
  }

  export type QrCreateOrConnectWithoutClienteInput = {
    where: QrWhereUniqueInput
    create: XOR<QrCreateWithoutClienteInput, QrUncheckedCreateWithoutClienteInput>
  }

  export type QrCreateManyClienteInputEnvelope = {
    data: QrCreateManyClienteInput | QrCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AcumulacionCreateWithoutClienteInput = {
    id?: string
    cantidad?: number
    fecha?: Date | string
    promocion: PromocionCreateNestedOneWithoutAcumulacionesInput
    qr?: QrCreateNestedOneWithoutAcumulacionesInput
  }

  export type AcumulacionUncheckedCreateWithoutClienteInput = {
    id?: string
    idPromocion: string
    idQR?: string | null
    cantidad?: number
    fecha?: Date | string
  }

  export type AcumulacionCreateOrConnectWithoutClienteInput = {
    where: AcumulacionWhereUniqueInput
    create: XOR<AcumulacionCreateWithoutClienteInput, AcumulacionUncheckedCreateWithoutClienteInput>
  }

  export type AcumulacionCreateManyClienteInputEnvelope = {
    data: AcumulacionCreateManyClienteInput | AcumulacionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoPromocionCreateWithoutClienteInput = {
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
    promocion: PromocionCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoPromocionUncheckedCreateWithoutClienteInput = {
    idPromocion: string
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
  }

  export type ProgresoPromocionCreateOrConnectWithoutClienteInput = {
    where: ProgresoPromocionWhereUniqueInput
    create: XOR<ProgresoPromocionCreateWithoutClienteInput, ProgresoPromocionUncheckedCreateWithoutClienteInput>
  }

  export type ProgresoPromocionCreateManyClienteInputEnvelope = {
    data: ProgresoPromocionCreateManyClienteInput | ProgresoPromocionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type CanjeCreateWithoutClienteInput = {
    id?: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
    recompensa: RecompensaCreateNestedOneWithoutCanjesInput
  }

  export type CanjeUncheckedCreateWithoutClienteInput = {
    id?: string
    idRecompensa: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
  }

  export type CanjeCreateOrConnectWithoutClienteInput = {
    where: CanjeWhereUniqueInput
    create: XOR<CanjeCreateWithoutClienteInput, CanjeUncheckedCreateWithoutClienteInput>
  }

  export type CanjeCreateManyClienteInputEnvelope = {
    data: CanjeCreateManyClienteInput | CanjeCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutClienteInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    tienda?: TiendaCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateWithoutClienteInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    tiendaId?: string | null
  }

  export type TokenCreateOrConnectWithoutClienteInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutClienteInput, TokenUncheckedCreateWithoutClienteInput>
  }

  export type TokenCreateManyClienteInputEnvelope = {
    data: TokenCreateManyClienteInput | TokenCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ClienteTiendaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ClienteTiendaWhereUniqueInput
    update: XOR<ClienteTiendaUpdateWithoutClienteInput, ClienteTiendaUncheckedUpdateWithoutClienteInput>
    create: XOR<ClienteTiendaCreateWithoutClienteInput, ClienteTiendaUncheckedCreateWithoutClienteInput>
  }

  export type ClienteTiendaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ClienteTiendaWhereUniqueInput
    data: XOR<ClienteTiendaUpdateWithoutClienteInput, ClienteTiendaUncheckedUpdateWithoutClienteInput>
  }

  export type ClienteTiendaUpdateManyWithWhereWithoutClienteInput = {
    where: ClienteTiendaScalarWhereInput
    data: XOR<ClienteTiendaUpdateManyMutationInput, ClienteTiendaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteTiendaScalarWhereInput = {
    AND?: ClienteTiendaScalarWhereInput | ClienteTiendaScalarWhereInput[]
    OR?: ClienteTiendaScalarWhereInput[]
    NOT?: ClienteTiendaScalarWhereInput | ClienteTiendaScalarWhereInput[]
    idCliente?: UuidFilter<"ClienteTienda"> | string
    idTienda?: UuidFilter<"ClienteTienda"> | string
    fechaRegistro?: DateTimeFilter<"ClienteTienda"> | Date | string
    estado?: StringNullableFilter<"ClienteTienda"> | string | null
  }

  export type QrUpsertWithWhereUniqueWithoutClienteInput = {
    where: QrWhereUniqueInput
    update: XOR<QrUpdateWithoutClienteInput, QrUncheckedUpdateWithoutClienteInput>
    create: XOR<QrCreateWithoutClienteInput, QrUncheckedCreateWithoutClienteInput>
  }

  export type QrUpdateWithWhereUniqueWithoutClienteInput = {
    where: QrWhereUniqueInput
    data: XOR<QrUpdateWithoutClienteInput, QrUncheckedUpdateWithoutClienteInput>
  }

  export type QrUpdateManyWithWhereWithoutClienteInput = {
    where: QrScalarWhereInput
    data: XOR<QrUpdateManyMutationInput, QrUncheckedUpdateManyWithoutClienteInput>
  }

  export type QrScalarWhereInput = {
    AND?: QrScalarWhereInput | QrScalarWhereInput[]
    OR?: QrScalarWhereInput[]
    NOT?: QrScalarWhereInput | QrScalarWhereInput[]
    id?: UuidFilter<"Qr"> | string
    idTienda?: UuidFilter<"Qr"> | string
    idCliente?: UuidFilter<"Qr"> | string
    status?: StringNullableFilter<"Qr"> | string | null
    fechaCreacion?: DateTimeFilter<"Qr"> | Date | string
    fechaExpiracion?: DateTimeFilter<"Qr"> | Date | string
  }

  export type AcumulacionUpsertWithWhereUniqueWithoutClienteInput = {
    where: AcumulacionWhereUniqueInput
    update: XOR<AcumulacionUpdateWithoutClienteInput, AcumulacionUncheckedUpdateWithoutClienteInput>
    create: XOR<AcumulacionCreateWithoutClienteInput, AcumulacionUncheckedCreateWithoutClienteInput>
  }

  export type AcumulacionUpdateWithWhereUniqueWithoutClienteInput = {
    where: AcumulacionWhereUniqueInput
    data: XOR<AcumulacionUpdateWithoutClienteInput, AcumulacionUncheckedUpdateWithoutClienteInput>
  }

  export type AcumulacionUpdateManyWithWhereWithoutClienteInput = {
    where: AcumulacionScalarWhereInput
    data: XOR<AcumulacionUpdateManyMutationInput, AcumulacionUncheckedUpdateManyWithoutClienteInput>
  }

  export type AcumulacionScalarWhereInput = {
    AND?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
    OR?: AcumulacionScalarWhereInput[]
    NOT?: AcumulacionScalarWhereInput | AcumulacionScalarWhereInput[]
    id?: UuidFilter<"Acumulacion"> | string
    idCliente?: UuidFilter<"Acumulacion"> | string
    idPromocion?: UuidFilter<"Acumulacion"> | string
    idQR?: UuidNullableFilter<"Acumulacion"> | string | null
    cantidad?: IntFilter<"Acumulacion"> | number
    fecha?: DateTimeFilter<"Acumulacion"> | Date | string
  }

  export type ProgresoPromocionUpsertWithWhereUniqueWithoutClienteInput = {
    where: ProgresoPromocionWhereUniqueInput
    update: XOR<ProgresoPromocionUpdateWithoutClienteInput, ProgresoPromocionUncheckedUpdateWithoutClienteInput>
    create: XOR<ProgresoPromocionCreateWithoutClienteInput, ProgresoPromocionUncheckedCreateWithoutClienteInput>
  }

  export type ProgresoPromocionUpdateWithWhereUniqueWithoutClienteInput = {
    where: ProgresoPromocionWhereUniqueInput
    data: XOR<ProgresoPromocionUpdateWithoutClienteInput, ProgresoPromocionUncheckedUpdateWithoutClienteInput>
  }

  export type ProgresoPromocionUpdateManyWithWhereWithoutClienteInput = {
    where: ProgresoPromocionScalarWhereInput
    data: XOR<ProgresoPromocionUpdateManyMutationInput, ProgresoPromocionUncheckedUpdateManyWithoutClienteInput>
  }

  export type ProgresoPromocionScalarWhereInput = {
    AND?: ProgresoPromocionScalarWhereInput | ProgresoPromocionScalarWhereInput[]
    OR?: ProgresoPromocionScalarWhereInput[]
    NOT?: ProgresoPromocionScalarWhereInput | ProgresoPromocionScalarWhereInput[]
    idCliente?: UuidFilter<"ProgresoPromocion"> | string
    idPromocion?: UuidFilter<"ProgresoPromocion"> | string
    totalAcumulado?: IntFilter<"ProgresoPromocion"> | number
    ultimaActualizacion?: DateTimeFilter<"ProgresoPromocion"> | Date | string
  }

  export type CanjeUpsertWithWhereUniqueWithoutClienteInput = {
    where: CanjeWhereUniqueInput
    update: XOR<CanjeUpdateWithoutClienteInput, CanjeUncheckedUpdateWithoutClienteInput>
    create: XOR<CanjeCreateWithoutClienteInput, CanjeUncheckedCreateWithoutClienteInput>
  }

  export type CanjeUpdateWithWhereUniqueWithoutClienteInput = {
    where: CanjeWhereUniqueInput
    data: XOR<CanjeUpdateWithoutClienteInput, CanjeUncheckedUpdateWithoutClienteInput>
  }

  export type CanjeUpdateManyWithWhereWithoutClienteInput = {
    where: CanjeScalarWhereInput
    data: XOR<CanjeUpdateManyMutationInput, CanjeUncheckedUpdateManyWithoutClienteInput>
  }

  export type CanjeScalarWhereInput = {
    AND?: CanjeScalarWhereInput | CanjeScalarWhereInput[]
    OR?: CanjeScalarWhereInput[]
    NOT?: CanjeScalarWhereInput | CanjeScalarWhereInput[]
    id?: UuidFilter<"Canje"> | string
    idCliente?: UuidFilter<"Canje"> | string
    idRecompensa?: UuidFilter<"Canje"> | string
    codigo?: StringFilter<"Canje"> | string
    estado?: StringNullableFilter<"Canje"> | string | null
    fechaGeneracion?: DateTimeFilter<"Canje"> | Date | string
    fechaExpiracion?: DateTimeNullableFilter<"Canje"> | Date | string | null
    fechaUso?: DateTimeNullableFilter<"Canje"> | Date | string | null
  }

  export type TokenUpsertWithWhereUniqueWithoutClienteInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutClienteInput, TokenUncheckedUpdateWithoutClienteInput>
    create: XOR<TokenCreateWithoutClienteInput, TokenUncheckedCreateWithoutClienteInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutClienteInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutClienteInput, TokenUncheckedUpdateWithoutClienteInput>
  }

  export type TokenUpdateManyWithWhereWithoutClienteInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutClienteInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: UuidFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    tipo?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    clienteId?: UuidNullableFilter<"Token"> | string | null
    tiendaId?: UuidNullableFilter<"Token"> | string | null
  }

  export type ClienteTiendaCreateWithoutTiendaInput = {
    fechaRegistro?: Date | string
    estado?: string | null
    cliente: ClienteCreateNestedOneWithoutTiendasInput
  }

  export type ClienteTiendaUncheckedCreateWithoutTiendaInput = {
    idCliente: string
    fechaRegistro?: Date | string
    estado?: string | null
  }

  export type ClienteTiendaCreateOrConnectWithoutTiendaInput = {
    where: ClienteTiendaWhereUniqueInput
    create: XOR<ClienteTiendaCreateWithoutTiendaInput, ClienteTiendaUncheckedCreateWithoutTiendaInput>
  }

  export type ClienteTiendaCreateManyTiendaInputEnvelope = {
    data: ClienteTiendaCreateManyTiendaInput | ClienteTiendaCreateManyTiendaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutTiendaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutTiendaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutTiendaInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutTiendaInput, CategoriaUncheckedCreateWithoutTiendaInput>
  }

  export type CategoriaCreateManyTiendaInputEnvelope = {
    data: CategoriaCreateManyTiendaInput | CategoriaCreateManyTiendaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoCreateWithoutTiendaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutProductosInput
    promociones?: PromocionCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutTiendaInput = {
    id?: string
    idCategoria?: string | null
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    promociones?: PromocionUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutTiendaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutTiendaInput, ProductoUncheckedCreateWithoutTiendaInput>
  }

  export type ProductoCreateManyTiendaInputEnvelope = {
    data: ProductoCreateManyTiendaInput | ProductoCreateManyTiendaInput[]
    skipDuplicates?: boolean
  }

  export type PromocionCreateWithoutTiendaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    producto: ProductoCreateNestedOneWithoutPromocionesInput
    recompensa?: RecompensaCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateWithoutTiendaInput = {
    id?: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    recompensa?: RecompensaUncheckedCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionCreateOrConnectWithoutTiendaInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutTiendaInput, PromocionUncheckedCreateWithoutTiendaInput>
  }

  export type PromocionCreateManyTiendaInputEnvelope = {
    data: PromocionCreateManyTiendaInput | PromocionCreateManyTiendaInput[]
    skipDuplicates?: boolean
  }

  export type QrCreateWithoutTiendaInput = {
    id?: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    cliente: ClienteCreateNestedOneWithoutQrsInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutQrInput
  }

  export type QrUncheckedCreateWithoutTiendaInput = {
    id?: string
    idCliente: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutQrInput
  }

  export type QrCreateOrConnectWithoutTiendaInput = {
    where: QrWhereUniqueInput
    create: XOR<QrCreateWithoutTiendaInput, QrUncheckedCreateWithoutTiendaInput>
  }

  export type QrCreateManyTiendaInputEnvelope = {
    data: QrCreateManyTiendaInput | QrCreateManyTiendaInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutTiendaInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    cliente?: ClienteCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateWithoutTiendaInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    clienteId?: string | null
  }

  export type TokenCreateOrConnectWithoutTiendaInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTiendaInput, TokenUncheckedCreateWithoutTiendaInput>
  }

  export type TokenCreateManyTiendaInputEnvelope = {
    data: TokenCreateManyTiendaInput | TokenCreateManyTiendaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteTiendaUpsertWithWhereUniqueWithoutTiendaInput = {
    where: ClienteTiendaWhereUniqueInput
    update: XOR<ClienteTiendaUpdateWithoutTiendaInput, ClienteTiendaUncheckedUpdateWithoutTiendaInput>
    create: XOR<ClienteTiendaCreateWithoutTiendaInput, ClienteTiendaUncheckedCreateWithoutTiendaInput>
  }

  export type ClienteTiendaUpdateWithWhereUniqueWithoutTiendaInput = {
    where: ClienteTiendaWhereUniqueInput
    data: XOR<ClienteTiendaUpdateWithoutTiendaInput, ClienteTiendaUncheckedUpdateWithoutTiendaInput>
  }

  export type ClienteTiendaUpdateManyWithWhereWithoutTiendaInput = {
    where: ClienteTiendaScalarWhereInput
    data: XOR<ClienteTiendaUpdateManyMutationInput, ClienteTiendaUncheckedUpdateManyWithoutTiendaInput>
  }

  export type CategoriaUpsertWithWhereUniqueWithoutTiendaInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutTiendaInput, CategoriaUncheckedUpdateWithoutTiendaInput>
    create: XOR<CategoriaCreateWithoutTiendaInput, CategoriaUncheckedCreateWithoutTiendaInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutTiendaInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutTiendaInput, CategoriaUncheckedUpdateWithoutTiendaInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutTiendaInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutTiendaInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: UuidFilter<"Categoria"> | string
    idTienda?: UuidFilter<"Categoria"> | string
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
  }

  export type ProductoUpsertWithWhereUniqueWithoutTiendaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutTiendaInput, ProductoUncheckedUpdateWithoutTiendaInput>
    create: XOR<ProductoCreateWithoutTiendaInput, ProductoUncheckedCreateWithoutTiendaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutTiendaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutTiendaInput, ProductoUncheckedUpdateWithoutTiendaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutTiendaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutTiendaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: UuidFilter<"Producto"> | string
    idTienda?: UuidFilter<"Producto"> | string
    idCategoria?: UuidNullableFilter<"Producto"> | string | null
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen_url?: StringNullableFilter<"Producto"> | string | null
    estado?: StringNullableFilter<"Producto"> | string | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
  }

  export type PromocionUpsertWithWhereUniqueWithoutTiendaInput = {
    where: PromocionWhereUniqueInput
    update: XOR<PromocionUpdateWithoutTiendaInput, PromocionUncheckedUpdateWithoutTiendaInput>
    create: XOR<PromocionCreateWithoutTiendaInput, PromocionUncheckedCreateWithoutTiendaInput>
  }

  export type PromocionUpdateWithWhereUniqueWithoutTiendaInput = {
    where: PromocionWhereUniqueInput
    data: XOR<PromocionUpdateWithoutTiendaInput, PromocionUncheckedUpdateWithoutTiendaInput>
  }

  export type PromocionUpdateManyWithWhereWithoutTiendaInput = {
    where: PromocionScalarWhereInput
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyWithoutTiendaInput>
  }

  export type PromocionScalarWhereInput = {
    AND?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
    OR?: PromocionScalarWhereInput[]
    NOT?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
    id?: UuidFilter<"Promocion"> | string
    idTienda?: UuidFilter<"Promocion"> | string
    idProducto?: UuidFilter<"Promocion"> | string
    nombre?: StringFilter<"Promocion"> | string
    descripcion?: StringNullableFilter<"Promocion"> | string | null
    unidadesObjetivo?: IntFilter<"Promocion"> | number
    fechaInicio?: DateTimeFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    estado?: StringNullableFilter<"Promocion"> | string | null
    createdAt?: DateTimeFilter<"Promocion"> | Date | string
  }

  export type QrUpsertWithWhereUniqueWithoutTiendaInput = {
    where: QrWhereUniqueInput
    update: XOR<QrUpdateWithoutTiendaInput, QrUncheckedUpdateWithoutTiendaInput>
    create: XOR<QrCreateWithoutTiendaInput, QrUncheckedCreateWithoutTiendaInput>
  }

  export type QrUpdateWithWhereUniqueWithoutTiendaInput = {
    where: QrWhereUniqueInput
    data: XOR<QrUpdateWithoutTiendaInput, QrUncheckedUpdateWithoutTiendaInput>
  }

  export type QrUpdateManyWithWhereWithoutTiendaInput = {
    where: QrScalarWhereInput
    data: XOR<QrUpdateManyMutationInput, QrUncheckedUpdateManyWithoutTiendaInput>
  }

  export type TokenUpsertWithWhereUniqueWithoutTiendaInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutTiendaInput, TokenUncheckedUpdateWithoutTiendaInput>
    create: XOR<TokenCreateWithoutTiendaInput, TokenUncheckedCreateWithoutTiendaInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutTiendaInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutTiendaInput, TokenUncheckedUpdateWithoutTiendaInput>
  }

  export type TokenUpdateManyWithWhereWithoutTiendaInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutTiendaInput>
  }

  export type ClienteCreateWithoutTiendasInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    qrs?: QrCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutClienteInput
    canjes?: CanjeCreateNestedManyWithoutClienteInput
    tokens?: TokenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutTiendasInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    qrs?: QrUncheckedCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput
    canjes?: CanjeUncheckedCreateNestedManyWithoutClienteInput
    tokens?: TokenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutTiendasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTiendasInput, ClienteUncheckedCreateWithoutTiendasInput>
  }

  export type TiendaCreateWithoutClientesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    categorias?: CategoriaCreateNestedManyWithoutTiendaInput
    productos?: ProductoCreateNestedManyWithoutTiendaInput
    promociones?: PromocionCreateNestedManyWithoutTiendaInput
    qrs?: QrCreateNestedManyWithoutTiendaInput
    tokens?: TokenCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateWithoutClientesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    categorias?: CategoriaUncheckedCreateNestedManyWithoutTiendaInput
    productos?: ProductoUncheckedCreateNestedManyWithoutTiendaInput
    promociones?: PromocionUncheckedCreateNestedManyWithoutTiendaInput
    qrs?: QrUncheckedCreateNestedManyWithoutTiendaInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaCreateOrConnectWithoutClientesInput = {
    where: TiendaWhereUniqueInput
    create: XOR<TiendaCreateWithoutClientesInput, TiendaUncheckedCreateWithoutClientesInput>
  }

  export type ClienteUpsertWithoutTiendasInput = {
    update: XOR<ClienteUpdateWithoutTiendasInput, ClienteUncheckedUpdateWithoutTiendasInput>
    create: XOR<ClienteCreateWithoutTiendasInput, ClienteUncheckedCreateWithoutTiendasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutTiendasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutTiendasInput, ClienteUncheckedUpdateWithoutTiendasInput>
  }

  export type ClienteUpdateWithoutTiendasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrs?: QrUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUpdateManyWithoutClienteNestedInput
    tokens?: TokenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutTiendasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrs?: QrUncheckedUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUncheckedUpdateManyWithoutClienteNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type TiendaUpsertWithoutClientesInput = {
    update: XOR<TiendaUpdateWithoutClientesInput, TiendaUncheckedUpdateWithoutClientesInput>
    create: XOR<TiendaCreateWithoutClientesInput, TiendaUncheckedCreateWithoutClientesInput>
    where?: TiendaWhereInput
  }

  export type TiendaUpdateToOneWithWhereWithoutClientesInput = {
    where?: TiendaWhereInput
    data: XOR<TiendaUpdateWithoutClientesInput, TiendaUncheckedUpdateWithoutClientesInput>
  }

  export type TiendaUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUpdateManyWithoutTiendaNestedInput
    qrs?: QrUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUncheckedUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUncheckedUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUncheckedUpdateManyWithoutTiendaNestedInput
    qrs?: QrUncheckedUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaCreateWithoutCategoriasInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaCreateNestedManyWithoutTiendaInput
    productos?: ProductoCreateNestedManyWithoutTiendaInput
    promociones?: PromocionCreateNestedManyWithoutTiendaInput
    qrs?: QrCreateNestedManyWithoutTiendaInput
    tokens?: TokenCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateWithoutCategoriasInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput
    productos?: ProductoUncheckedCreateNestedManyWithoutTiendaInput
    promociones?: PromocionUncheckedCreateNestedManyWithoutTiendaInput
    qrs?: QrUncheckedCreateNestedManyWithoutTiendaInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaCreateOrConnectWithoutCategoriasInput = {
    where: TiendaWhereUniqueInput
    create: XOR<TiendaCreateWithoutCategoriasInput, TiendaUncheckedCreateWithoutCategoriasInput>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutProductosInput
    promociones?: PromocionCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    promociones?: PromocionUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type TiendaUpsertWithoutCategoriasInput = {
    update: XOR<TiendaUpdateWithoutCategoriasInput, TiendaUncheckedUpdateWithoutCategoriasInput>
    create: XOR<TiendaCreateWithoutCategoriasInput, TiendaUncheckedCreateWithoutCategoriasInput>
    where?: TiendaWhereInput
  }

  export type TiendaUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: TiendaWhereInput
    data: XOR<TiendaUpdateWithoutCategoriasInput, TiendaUncheckedUpdateWithoutCategoriasInput>
  }

  export type TiendaUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUpdateManyWithoutTiendaNestedInput
    qrs?: QrUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUncheckedUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUncheckedUpdateManyWithoutTiendaNestedInput
    qrs?: QrUncheckedUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type TiendaCreateWithoutProductosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaCreateNestedManyWithoutTiendaInput
    promociones?: PromocionCreateNestedManyWithoutTiendaInput
    qrs?: QrCreateNestedManyWithoutTiendaInput
    tokens?: TokenCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateWithoutProductosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutTiendaInput
    promociones?: PromocionUncheckedCreateNestedManyWithoutTiendaInput
    qrs?: QrUncheckedCreateNestedManyWithoutTiendaInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaCreateOrConnectWithoutProductosInput = {
    where: TiendaWhereUniqueInput
    create: XOR<TiendaCreateWithoutProductosInput, TiendaUncheckedCreateWithoutProductosInput>
  }

  export type CategoriaCreateWithoutProductosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    tienda: TiendaCreateNestedOneWithoutCategoriasInput
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type PromocionCreateWithoutProductoInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutPromocionesInput
    recompensa?: RecompensaCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateWithoutProductoInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    recompensa?: RecompensaUncheckedCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionCreateOrConnectWithoutProductoInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutProductoInput, PromocionUncheckedCreateWithoutProductoInput>
  }

  export type PromocionCreateManyProductoInputEnvelope = {
    data: PromocionCreateManyProductoInput | PromocionCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type TiendaUpsertWithoutProductosInput = {
    update: XOR<TiendaUpdateWithoutProductosInput, TiendaUncheckedUpdateWithoutProductosInput>
    create: XOR<TiendaCreateWithoutProductosInput, TiendaUncheckedCreateWithoutProductosInput>
    where?: TiendaWhereInput
  }

  export type TiendaUpdateToOneWithWhereWithoutProductosInput = {
    where?: TiendaWhereInput
    data: XOR<TiendaUpdateWithoutProductosInput, TiendaUncheckedUpdateWithoutProductosInput>
  }

  export type TiendaUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUpdateManyWithoutTiendaNestedInput
    qrs?: QrUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUncheckedUpdateManyWithoutTiendaNestedInput
    qrs?: QrUncheckedUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tienda?: TiendaUpdateOneRequiredWithoutCategoriasNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromocionUpsertWithWhereUniqueWithoutProductoInput = {
    where: PromocionWhereUniqueInput
    update: XOR<PromocionUpdateWithoutProductoInput, PromocionUncheckedUpdateWithoutProductoInput>
    create: XOR<PromocionCreateWithoutProductoInput, PromocionUncheckedCreateWithoutProductoInput>
  }

  export type PromocionUpdateWithWhereUniqueWithoutProductoInput = {
    where: PromocionWhereUniqueInput
    data: XOR<PromocionUpdateWithoutProductoInput, PromocionUncheckedUpdateWithoutProductoInput>
  }

  export type PromocionUpdateManyWithWhereWithoutProductoInput = {
    where: PromocionScalarWhereInput
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyWithoutProductoInput>
  }

  export type TiendaCreateWithoutPromocionesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaCreateNestedManyWithoutTiendaInput
    productos?: ProductoCreateNestedManyWithoutTiendaInput
    qrs?: QrCreateNestedManyWithoutTiendaInput
    tokens?: TokenCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateWithoutPromocionesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutTiendaInput
    productos?: ProductoUncheckedCreateNestedManyWithoutTiendaInput
    qrs?: QrUncheckedCreateNestedManyWithoutTiendaInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaCreateOrConnectWithoutPromocionesInput = {
    where: TiendaWhereUniqueInput
    create: XOR<TiendaCreateWithoutPromocionesInput, TiendaUncheckedCreateWithoutPromocionesInput>
  }

  export type ProductoCreateWithoutPromocionesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutProductosInput
    categoria?: CategoriaCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutPromocionesInput = {
    id?: string
    idTienda: string
    idCategoria?: string | null
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type ProductoCreateOrConnectWithoutPromocionesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPromocionesInput, ProductoUncheckedCreateWithoutPromocionesInput>
  }

  export type RecompensaCreateWithoutPromocionInput = {
    id?: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
    canjes?: CanjeCreateNestedManyWithoutRecompensaInput
  }

  export type RecompensaUncheckedCreateWithoutPromocionInput = {
    id?: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
    canjes?: CanjeUncheckedCreateNestedManyWithoutRecompensaInput
  }

  export type RecompensaCreateOrConnectWithoutPromocionInput = {
    where: RecompensaWhereUniqueInput
    create: XOR<RecompensaCreateWithoutPromocionInput, RecompensaUncheckedCreateWithoutPromocionInput>
  }

  export type AcumulacionCreateWithoutPromocionInput = {
    id?: string
    cantidad?: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutAcumulacionesInput
    qr?: QrCreateNestedOneWithoutAcumulacionesInput
  }

  export type AcumulacionUncheckedCreateWithoutPromocionInput = {
    id?: string
    idCliente: string
    idQR?: string | null
    cantidad?: number
    fecha?: Date | string
  }

  export type AcumulacionCreateOrConnectWithoutPromocionInput = {
    where: AcumulacionWhereUniqueInput
    create: XOR<AcumulacionCreateWithoutPromocionInput, AcumulacionUncheckedCreateWithoutPromocionInput>
  }

  export type AcumulacionCreateManyPromocionInputEnvelope = {
    data: AcumulacionCreateManyPromocionInput | AcumulacionCreateManyPromocionInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoPromocionCreateWithoutPromocionInput = {
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
    cliente: ClienteCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoPromocionUncheckedCreateWithoutPromocionInput = {
    idCliente: string
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
  }

  export type ProgresoPromocionCreateOrConnectWithoutPromocionInput = {
    where: ProgresoPromocionWhereUniqueInput
    create: XOR<ProgresoPromocionCreateWithoutPromocionInput, ProgresoPromocionUncheckedCreateWithoutPromocionInput>
  }

  export type ProgresoPromocionCreateManyPromocionInputEnvelope = {
    data: ProgresoPromocionCreateManyPromocionInput | ProgresoPromocionCreateManyPromocionInput[]
    skipDuplicates?: boolean
  }

  export type TiendaUpsertWithoutPromocionesInput = {
    update: XOR<TiendaUpdateWithoutPromocionesInput, TiendaUncheckedUpdateWithoutPromocionesInput>
    create: XOR<TiendaCreateWithoutPromocionesInput, TiendaUncheckedCreateWithoutPromocionesInput>
    where?: TiendaWhereInput
  }

  export type TiendaUpdateToOneWithWhereWithoutPromocionesInput = {
    where?: TiendaWhereInput
    data: XOR<TiendaUpdateWithoutPromocionesInput, TiendaUncheckedUpdateWithoutPromocionesInput>
  }

  export type TiendaUpdateWithoutPromocionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUpdateManyWithoutTiendaNestedInput
    qrs?: QrUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateWithoutPromocionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUncheckedUpdateManyWithoutTiendaNestedInput
    qrs?: QrUncheckedUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type ProductoUpsertWithoutPromocionesInput = {
    update: XOR<ProductoUpdateWithoutPromocionesInput, ProductoUncheckedUpdateWithoutPromocionesInput>
    create: XOR<ProductoCreateWithoutPromocionesInput, ProductoUncheckedCreateWithoutPromocionesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutPromocionesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutPromocionesInput, ProductoUncheckedUpdateWithoutPromocionesInput>
  }

  export type ProductoUpdateWithoutPromocionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutProductosNestedInput
    categoria?: CategoriaUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutPromocionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idCategoria?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecompensaUpsertWithoutPromocionInput = {
    update: XOR<RecompensaUpdateWithoutPromocionInput, RecompensaUncheckedUpdateWithoutPromocionInput>
    create: XOR<RecompensaCreateWithoutPromocionInput, RecompensaUncheckedCreateWithoutPromocionInput>
    where?: RecompensaWhereInput
  }

  export type RecompensaUpdateToOneWithWhereWithoutPromocionInput = {
    where?: RecompensaWhereInput
    data: XOR<RecompensaUpdateWithoutPromocionInput, RecompensaUncheckedUpdateWithoutPromocionInput>
  }

  export type RecompensaUpdateWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canjes?: CanjeUpdateManyWithoutRecompensaNestedInput
  }

  export type RecompensaUncheckedUpdateWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canjes?: CanjeUncheckedUpdateManyWithoutRecompensaNestedInput
  }

  export type AcumulacionUpsertWithWhereUniqueWithoutPromocionInput = {
    where: AcumulacionWhereUniqueInput
    update: XOR<AcumulacionUpdateWithoutPromocionInput, AcumulacionUncheckedUpdateWithoutPromocionInput>
    create: XOR<AcumulacionCreateWithoutPromocionInput, AcumulacionUncheckedCreateWithoutPromocionInput>
  }

  export type AcumulacionUpdateWithWhereUniqueWithoutPromocionInput = {
    where: AcumulacionWhereUniqueInput
    data: XOR<AcumulacionUpdateWithoutPromocionInput, AcumulacionUncheckedUpdateWithoutPromocionInput>
  }

  export type AcumulacionUpdateManyWithWhereWithoutPromocionInput = {
    where: AcumulacionScalarWhereInput
    data: XOR<AcumulacionUpdateManyMutationInput, AcumulacionUncheckedUpdateManyWithoutPromocionInput>
  }

  export type ProgresoPromocionUpsertWithWhereUniqueWithoutPromocionInput = {
    where: ProgresoPromocionWhereUniqueInput
    update: XOR<ProgresoPromocionUpdateWithoutPromocionInput, ProgresoPromocionUncheckedUpdateWithoutPromocionInput>
    create: XOR<ProgresoPromocionCreateWithoutPromocionInput, ProgresoPromocionUncheckedCreateWithoutPromocionInput>
  }

  export type ProgresoPromocionUpdateWithWhereUniqueWithoutPromocionInput = {
    where: ProgresoPromocionWhereUniqueInput
    data: XOR<ProgresoPromocionUpdateWithoutPromocionInput, ProgresoPromocionUncheckedUpdateWithoutPromocionInput>
  }

  export type ProgresoPromocionUpdateManyWithWhereWithoutPromocionInput = {
    where: ProgresoPromocionScalarWhereInput
    data: XOR<ProgresoPromocionUpdateManyMutationInput, ProgresoPromocionUncheckedUpdateManyWithoutPromocionInput>
  }

  export type PromocionCreateWithoutRecompensaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutPromocionesInput
    producto: ProductoCreateNestedOneWithoutPromocionesInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateWithoutRecompensaInput = {
    id?: string
    idTienda: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutPromocionInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionCreateOrConnectWithoutRecompensaInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutRecompensaInput, PromocionUncheckedCreateWithoutRecompensaInput>
  }

  export type CanjeCreateWithoutRecompensaInput = {
    id?: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutCanjesInput
  }

  export type CanjeUncheckedCreateWithoutRecompensaInput = {
    id?: string
    idCliente: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
  }

  export type CanjeCreateOrConnectWithoutRecompensaInput = {
    where: CanjeWhereUniqueInput
    create: XOR<CanjeCreateWithoutRecompensaInput, CanjeUncheckedCreateWithoutRecompensaInput>
  }

  export type CanjeCreateManyRecompensaInputEnvelope = {
    data: CanjeCreateManyRecompensaInput | CanjeCreateManyRecompensaInput[]
    skipDuplicates?: boolean
  }

  export type PromocionUpsertWithoutRecompensaInput = {
    update: XOR<PromocionUpdateWithoutRecompensaInput, PromocionUncheckedUpdateWithoutRecompensaInput>
    create: XOR<PromocionCreateWithoutRecompensaInput, PromocionUncheckedCreateWithoutRecompensaInput>
    where?: PromocionWhereInput
  }

  export type PromocionUpdateToOneWithWhereWithoutRecompensaInput = {
    where?: PromocionWhereInput
    data: XOR<PromocionUpdateWithoutRecompensaInput, PromocionUncheckedUpdateWithoutRecompensaInput>
  }

  export type PromocionUpdateWithoutRecompensaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutPromocionesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPromocionesNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateWithoutRecompensaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type CanjeUpsertWithWhereUniqueWithoutRecompensaInput = {
    where: CanjeWhereUniqueInput
    update: XOR<CanjeUpdateWithoutRecompensaInput, CanjeUncheckedUpdateWithoutRecompensaInput>
    create: XOR<CanjeCreateWithoutRecompensaInput, CanjeUncheckedCreateWithoutRecompensaInput>
  }

  export type CanjeUpdateWithWhereUniqueWithoutRecompensaInput = {
    where: CanjeWhereUniqueInput
    data: XOR<CanjeUpdateWithoutRecompensaInput, CanjeUncheckedUpdateWithoutRecompensaInput>
  }

  export type CanjeUpdateManyWithWhereWithoutRecompensaInput = {
    where: CanjeScalarWhereInput
    data: XOR<CanjeUpdateManyMutationInput, CanjeUncheckedUpdateManyWithoutRecompensaInput>
  }

  export type TiendaCreateWithoutQrsInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaCreateNestedManyWithoutTiendaInput
    productos?: ProductoCreateNestedManyWithoutTiendaInput
    promociones?: PromocionCreateNestedManyWithoutTiendaInput
    tokens?: TokenCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateWithoutQrsInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutTiendaInput
    productos?: ProductoUncheckedCreateNestedManyWithoutTiendaInput
    promociones?: PromocionUncheckedCreateNestedManyWithoutTiendaInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaCreateOrConnectWithoutQrsInput = {
    where: TiendaWhereUniqueInput
    create: XOR<TiendaCreateWithoutQrsInput, TiendaUncheckedCreateWithoutQrsInput>
  }

  export type ClienteCreateWithoutQrsInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutClienteInput
    canjes?: CanjeCreateNestedManyWithoutClienteInput
    tokens?: TokenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutQrsInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput
    canjes?: CanjeUncheckedCreateNestedManyWithoutClienteInput
    tokens?: TokenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutQrsInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutQrsInput, ClienteUncheckedCreateWithoutQrsInput>
  }

  export type AcumulacionCreateWithoutQrInput = {
    id?: string
    cantidad?: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutAcumulacionesInput
    promocion: PromocionCreateNestedOneWithoutAcumulacionesInput
  }

  export type AcumulacionUncheckedCreateWithoutQrInput = {
    id?: string
    idCliente: string
    idPromocion: string
    cantidad?: number
    fecha?: Date | string
  }

  export type AcumulacionCreateOrConnectWithoutQrInput = {
    where: AcumulacionWhereUniqueInput
    create: XOR<AcumulacionCreateWithoutQrInput, AcumulacionUncheckedCreateWithoutQrInput>
  }

  export type AcumulacionCreateManyQrInputEnvelope = {
    data: AcumulacionCreateManyQrInput | AcumulacionCreateManyQrInput[]
    skipDuplicates?: boolean
  }

  export type TiendaUpsertWithoutQrsInput = {
    update: XOR<TiendaUpdateWithoutQrsInput, TiendaUncheckedUpdateWithoutQrsInput>
    create: XOR<TiendaCreateWithoutQrsInput, TiendaUncheckedCreateWithoutQrsInput>
    where?: TiendaWhereInput
  }

  export type TiendaUpdateToOneWithWhereWithoutQrsInput = {
    where?: TiendaWhereInput
    data: XOR<TiendaUpdateWithoutQrsInput, TiendaUncheckedUpdateWithoutQrsInput>
  }

  export type TiendaUpdateWithoutQrsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateWithoutQrsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUncheckedUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUncheckedUpdateManyWithoutTiendaNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type ClienteUpsertWithoutQrsInput = {
    update: XOR<ClienteUpdateWithoutQrsInput, ClienteUncheckedUpdateWithoutQrsInput>
    create: XOR<ClienteCreateWithoutQrsInput, ClienteUncheckedCreateWithoutQrsInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutQrsInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutQrsInput, ClienteUncheckedUpdateWithoutQrsInput>
  }

  export type ClienteUpdateWithoutQrsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUpdateManyWithoutClienteNestedInput
    tokens?: TokenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutQrsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUncheckedUpdateManyWithoutClienteNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AcumulacionUpsertWithWhereUniqueWithoutQrInput = {
    where: AcumulacionWhereUniqueInput
    update: XOR<AcumulacionUpdateWithoutQrInput, AcumulacionUncheckedUpdateWithoutQrInput>
    create: XOR<AcumulacionCreateWithoutQrInput, AcumulacionUncheckedCreateWithoutQrInput>
  }

  export type AcumulacionUpdateWithWhereUniqueWithoutQrInput = {
    where: AcumulacionWhereUniqueInput
    data: XOR<AcumulacionUpdateWithoutQrInput, AcumulacionUncheckedUpdateWithoutQrInput>
  }

  export type AcumulacionUpdateManyWithWhereWithoutQrInput = {
    where: AcumulacionScalarWhereInput
    data: XOR<AcumulacionUpdateManyMutationInput, AcumulacionUncheckedUpdateManyWithoutQrInput>
  }

  export type ClienteCreateWithoutAcumulacionesInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaCreateNestedManyWithoutClienteInput
    qrs?: QrCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutClienteInput
    canjes?: CanjeCreateNestedManyWithoutClienteInput
    tokens?: TokenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAcumulacionesInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput
    qrs?: QrUncheckedCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput
    canjes?: CanjeUncheckedCreateNestedManyWithoutClienteInput
    tokens?: TokenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAcumulacionesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAcumulacionesInput, ClienteUncheckedCreateWithoutAcumulacionesInput>
  }

  export type PromocionCreateWithoutAcumulacionesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutPromocionesInput
    producto: ProductoCreateNestedOneWithoutPromocionesInput
    recompensa?: RecompensaCreateNestedOneWithoutPromocionInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateWithoutAcumulacionesInput = {
    id?: string
    idTienda: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    recompensa?: RecompensaUncheckedCreateNestedOneWithoutPromocionInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionCreateOrConnectWithoutAcumulacionesInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutAcumulacionesInput, PromocionUncheckedCreateWithoutAcumulacionesInput>
  }

  export type QrCreateWithoutAcumulacionesInput = {
    id?: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
    tienda: TiendaCreateNestedOneWithoutQrsInput
    cliente: ClienteCreateNestedOneWithoutQrsInput
  }

  export type QrUncheckedCreateWithoutAcumulacionesInput = {
    id?: string
    idTienda: string
    idCliente: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
  }

  export type QrCreateOrConnectWithoutAcumulacionesInput = {
    where: QrWhereUniqueInput
    create: XOR<QrCreateWithoutAcumulacionesInput, QrUncheckedCreateWithoutAcumulacionesInput>
  }

  export type ClienteUpsertWithoutAcumulacionesInput = {
    update: XOR<ClienteUpdateWithoutAcumulacionesInput, ClienteUncheckedUpdateWithoutAcumulacionesInput>
    create: XOR<ClienteCreateWithoutAcumulacionesInput, ClienteUncheckedCreateWithoutAcumulacionesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAcumulacionesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAcumulacionesInput, ClienteUncheckedUpdateWithoutAcumulacionesInput>
  }

  export type ClienteUpdateWithoutAcumulacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUpdateManyWithoutClienteNestedInput
    qrs?: QrUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUpdateManyWithoutClienteNestedInput
    tokens?: TokenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAcumulacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput
    qrs?: QrUncheckedUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUncheckedUpdateManyWithoutClienteNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PromocionUpsertWithoutAcumulacionesInput = {
    update: XOR<PromocionUpdateWithoutAcumulacionesInput, PromocionUncheckedUpdateWithoutAcumulacionesInput>
    create: XOR<PromocionCreateWithoutAcumulacionesInput, PromocionUncheckedCreateWithoutAcumulacionesInput>
    where?: PromocionWhereInput
  }

  export type PromocionUpdateToOneWithWhereWithoutAcumulacionesInput = {
    where?: PromocionWhereInput
    data: XOR<PromocionUpdateWithoutAcumulacionesInput, PromocionUncheckedUpdateWithoutAcumulacionesInput>
  }

  export type PromocionUpdateWithoutAcumulacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutPromocionesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPromocionesNestedInput
    recompensa?: RecompensaUpdateOneWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateWithoutAcumulacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recompensa?: RecompensaUncheckedUpdateOneWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type QrUpsertWithoutAcumulacionesInput = {
    update: XOR<QrUpdateWithoutAcumulacionesInput, QrUncheckedUpdateWithoutAcumulacionesInput>
    create: XOR<QrCreateWithoutAcumulacionesInput, QrUncheckedCreateWithoutAcumulacionesInput>
    where?: QrWhereInput
  }

  export type QrUpdateToOneWithWhereWithoutAcumulacionesInput = {
    where?: QrWhereInput
    data: XOR<QrUpdateWithoutAcumulacionesInput, QrUncheckedUpdateWithoutAcumulacionesInput>
  }

  export type QrUpdateWithoutAcumulacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutQrsNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutQrsNestedInput
  }

  export type QrUncheckedUpdateWithoutAcumulacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateWithoutProgresosInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaCreateNestedManyWithoutClienteInput
    qrs?: QrCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutClienteInput
    canjes?: CanjeCreateNestedManyWithoutClienteInput
    tokens?: TokenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutProgresosInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput
    qrs?: QrUncheckedCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutClienteInput
    canjes?: CanjeUncheckedCreateNestedManyWithoutClienteInput
    tokens?: TokenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutProgresosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutProgresosInput, ClienteUncheckedCreateWithoutProgresosInput>
  }

  export type PromocionCreateWithoutProgresosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    tienda: TiendaCreateNestedOneWithoutPromocionesInput
    producto: ProductoCreateNestedOneWithoutPromocionesInput
    recompensa?: RecompensaCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateWithoutProgresosInput = {
    id?: string
    idTienda: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
    recompensa?: RecompensaUncheckedCreateNestedOneWithoutPromocionInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionCreateOrConnectWithoutProgresosInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutProgresosInput, PromocionUncheckedCreateWithoutProgresosInput>
  }

  export type ClienteUpsertWithoutProgresosInput = {
    update: XOR<ClienteUpdateWithoutProgresosInput, ClienteUncheckedUpdateWithoutProgresosInput>
    create: XOR<ClienteCreateWithoutProgresosInput, ClienteUncheckedCreateWithoutProgresosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutProgresosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutProgresosInput, ClienteUncheckedUpdateWithoutProgresosInput>
  }

  export type ClienteUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUpdateManyWithoutClienteNestedInput
    qrs?: QrUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUpdateManyWithoutClienteNestedInput
    tokens?: TokenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput
    qrs?: QrUncheckedUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUncheckedUpdateManyWithoutClienteNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PromocionUpsertWithoutProgresosInput = {
    update: XOR<PromocionUpdateWithoutProgresosInput, PromocionUncheckedUpdateWithoutProgresosInput>
    create: XOR<PromocionCreateWithoutProgresosInput, PromocionUncheckedCreateWithoutProgresosInput>
    where?: PromocionWhereInput
  }

  export type PromocionUpdateToOneWithWhereWithoutProgresosInput = {
    where?: PromocionWhereInput
    data: XOR<PromocionUpdateWithoutProgresosInput, PromocionUncheckedUpdateWithoutProgresosInput>
  }

  export type PromocionUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutPromocionesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPromocionesNestedInput
    recompensa?: RecompensaUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recompensa?: RecompensaUncheckedUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type ClienteCreateWithoutCanjesInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaCreateNestedManyWithoutClienteInput
    qrs?: QrCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutClienteInput
    tokens?: TokenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutCanjesInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput
    qrs?: QrUncheckedCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput
    tokens?: TokenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutCanjesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutCanjesInput, ClienteUncheckedCreateWithoutCanjesInput>
  }

  export type RecompensaCreateWithoutCanjesInput = {
    id?: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
    promocion: PromocionCreateNestedOneWithoutRecompensaInput
  }

  export type RecompensaUncheckedCreateWithoutCanjesInput = {
    id?: string
    idPromocion: string
    tipo: string
    valor?: Decimal | DecimalJsLike | number | string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type RecompensaCreateOrConnectWithoutCanjesInput = {
    where: RecompensaWhereUniqueInput
    create: XOR<RecompensaCreateWithoutCanjesInput, RecompensaUncheckedCreateWithoutCanjesInput>
  }

  export type ClienteUpsertWithoutCanjesInput = {
    update: XOR<ClienteUpdateWithoutCanjesInput, ClienteUncheckedUpdateWithoutCanjesInput>
    create: XOR<ClienteCreateWithoutCanjesInput, ClienteUncheckedCreateWithoutCanjesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutCanjesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutCanjesInput, ClienteUncheckedUpdateWithoutCanjesInput>
  }

  export type ClienteUpdateWithoutCanjesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUpdateManyWithoutClienteNestedInput
    qrs?: QrUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutClienteNestedInput
    tokens?: TokenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutCanjesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput
    qrs?: QrUncheckedUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RecompensaUpsertWithoutCanjesInput = {
    update: XOR<RecompensaUpdateWithoutCanjesInput, RecompensaUncheckedUpdateWithoutCanjesInput>
    create: XOR<RecompensaCreateWithoutCanjesInput, RecompensaUncheckedCreateWithoutCanjesInput>
    where?: RecompensaWhereInput
  }

  export type RecompensaUpdateToOneWithWhereWithoutCanjesInput = {
    where?: RecompensaWhereInput
    data: XOR<RecompensaUpdateWithoutCanjesInput, RecompensaUncheckedUpdateWithoutCanjesInput>
  }

  export type RecompensaUpdateWithoutCanjesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promocion?: PromocionUpdateOneRequiredWithoutRecompensaNestedInput
  }

  export type RecompensaUncheckedUpdateWithoutCanjesInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateWithoutTokensInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaCreateNestedManyWithoutClienteInput
    qrs?: QrCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionCreateNestedManyWithoutClienteInput
    canjes?: CanjeCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutTokensInput = {
    id?: string
    nombre: string
    apellido: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    tiendas?: ClienteTiendaUncheckedCreateNestedManyWithoutClienteInput
    qrs?: QrUncheckedCreateNestedManyWithoutClienteInput
    acumulaciones?: AcumulacionUncheckedCreateNestedManyWithoutClienteInput
    progresos?: ProgresoPromocionUncheckedCreateNestedManyWithoutClienteInput
    canjes?: CanjeUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutTokensInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTokensInput, ClienteUncheckedCreateWithoutTokensInput>
  }

  export type TiendaCreateWithoutTokensInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaCreateNestedManyWithoutTiendaInput
    productos?: ProductoCreateNestedManyWithoutTiendaInput
    promociones?: PromocionCreateNestedManyWithoutTiendaInput
    qrs?: QrCreateNestedManyWithoutTiendaInput
  }

  export type TiendaUncheckedCreateWithoutTokensInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    logo_url?: string | null
    email: string
    password_hash: string
    estado?: string | null
    createdAt?: Date | string
    clientes?: ClienteTiendaUncheckedCreateNestedManyWithoutTiendaInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutTiendaInput
    productos?: ProductoUncheckedCreateNestedManyWithoutTiendaInput
    promociones?: PromocionUncheckedCreateNestedManyWithoutTiendaInput
    qrs?: QrUncheckedCreateNestedManyWithoutTiendaInput
  }

  export type TiendaCreateOrConnectWithoutTokensInput = {
    where: TiendaWhereUniqueInput
    create: XOR<TiendaCreateWithoutTokensInput, TiendaUncheckedCreateWithoutTokensInput>
  }

  export type ClienteUpsertWithoutTokensInput = {
    update: XOR<ClienteUpdateWithoutTokensInput, ClienteUncheckedUpdateWithoutTokensInput>
    create: XOR<ClienteCreateWithoutTokensInput, ClienteUncheckedCreateWithoutTokensInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutTokensInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutTokensInput, ClienteUncheckedUpdateWithoutTokensInput>
  }

  export type ClienteUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUpdateManyWithoutClienteNestedInput
    qrs?: QrUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiendas?: ClienteTiendaUncheckedUpdateManyWithoutClienteNestedInput
    qrs?: QrUncheckedUpdateManyWithoutClienteNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutClienteNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutClienteNestedInput
    canjes?: CanjeUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type TiendaUpsertWithoutTokensInput = {
    update: XOR<TiendaUpdateWithoutTokensInput, TiendaUncheckedUpdateWithoutTokensInput>
    create: XOR<TiendaCreateWithoutTokensInput, TiendaUncheckedCreateWithoutTokensInput>
    where?: TiendaWhereInput
  }

  export type TiendaUpdateToOneWithWhereWithoutTokensInput = {
    where?: TiendaWhereInput
    data: XOR<TiendaUpdateWithoutTokensInput, TiendaUncheckedUpdateWithoutTokensInput>
  }

  export type TiendaUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUpdateManyWithoutTiendaNestedInput
    qrs?: QrUpdateManyWithoutTiendaNestedInput
  }

  export type TiendaUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteTiendaUncheckedUpdateManyWithoutTiendaNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutTiendaNestedInput
    productos?: ProductoUncheckedUpdateManyWithoutTiendaNestedInput
    promociones?: PromocionUncheckedUpdateManyWithoutTiendaNestedInput
    qrs?: QrUncheckedUpdateManyWithoutTiendaNestedInput
  }

  export type ClienteTiendaCreateManyClienteInput = {
    idTienda: string
    fechaRegistro?: Date | string
    estado?: string | null
  }

  export type QrCreateManyClienteInput = {
    id?: string
    idTienda: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
  }

  export type AcumulacionCreateManyClienteInput = {
    id?: string
    idPromocion: string
    idQR?: string | null
    cantidad?: number
    fecha?: Date | string
  }

  export type ProgresoPromocionCreateManyClienteInput = {
    idPromocion: string
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
  }

  export type CanjeCreateManyClienteInput = {
    id?: string
    idRecompensa: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
  }

  export type TokenCreateManyClienteInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    tiendaId?: string | null
  }

  export type ClienteTiendaUpdateWithoutClienteInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    tienda?: TiendaUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteTiendaUncheckedUpdateWithoutClienteInput = {
    idTienda?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteTiendaUncheckedUpdateManyWithoutClienteInput = {
    idTienda?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QrUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutQrsNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutQrNestedInput
  }

  export type QrUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutQrNestedInput
  }

  export type QrUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    promocion?: PromocionUpdateOneRequiredWithoutAcumulacionesNestedInput
    qr?: QrUpdateOneWithoutAcumulacionesNestedInput
  }

  export type AcumulacionUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    idQR?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    idQR?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionUpdateWithoutClienteInput = {
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    promocion?: PromocionUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoPromocionUncheckedUpdateWithoutClienteInput = {
    idPromocion?: StringFieldUpdateOperationsInput | string
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionUncheckedUpdateManyWithoutClienteInput = {
    idPromocion?: StringFieldUpdateOperationsInput | string
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanjeUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recompensa?: RecompensaUpdateOneRequiredWithoutCanjesNestedInput
  }

  export type CanjeUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idRecompensa?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CanjeUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idRecompensa?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tienda?: TiendaUpdateOneWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tiendaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tiendaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteTiendaCreateManyTiendaInput = {
    idCliente: string
    fechaRegistro?: Date | string
    estado?: string | null
  }

  export type CategoriaCreateManyTiendaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type ProductoCreateManyTiendaInput = {
    id?: string
    idCategoria?: string | null
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type PromocionCreateManyTiendaInput = {
    id?: string
    idProducto: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type QrCreateManyTiendaInput = {
    id?: string
    idCliente: string
    status?: string | null
    fechaCreacion?: Date | string
    fechaExpiracion: Date | string
  }

  export type TokenCreateManyTiendaInput = {
    id?: string
    token: string
    tipo: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    clienteId?: string | null
  }

  export type ClienteTiendaUpdateWithoutTiendaInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutTiendasNestedInput
  }

  export type ClienteTiendaUncheckedUpdateWithoutTiendaInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteTiendaUncheckedUpdateManyWithoutTiendaInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutProductosNestedInput
    promociones?: PromocionUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCategoria?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promociones?: PromocionUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCategoria?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutPromocionesNestedInput
    recompensa?: RecompensaUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recompensa?: RecompensaUncheckedUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateManyWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idProducto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutQrsNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutQrNestedInput
  }

  export type QrUncheckedUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutQrNestedInput
  }

  export type QrUncheckedUpdateManyWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyWithoutTiendaInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen_url?: string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutProductosNestedInput
    promociones?: PromocionUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promociones?: PromocionUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionCreateManyProductoInput = {
    id?: string
    idTienda: string
    nombre: string
    descripcion?: string | null
    unidadesObjetivo: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado?: string | null
    createdAt?: Date | string
  }

  export type PromocionUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tienda?: TiendaUpdateOneRequiredWithoutPromocionesNestedInput
    recompensa?: RecompensaUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recompensa?: RecompensaUncheckedUpdateOneWithoutPromocionNestedInput
    acumulaciones?: AcumulacionUncheckedUpdateManyWithoutPromocionNestedInput
    progresos?: ProgresoPromocionUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    idTienda?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidadesObjetivo?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionCreateManyPromocionInput = {
    id?: string
    idCliente: string
    idQR?: string | null
    cantidad?: number
    fecha?: Date | string
  }

  export type ProgresoPromocionCreateManyPromocionInput = {
    idCliente: string
    totalAcumulado?: number
    ultimaActualizacion?: Date | string
  }

  export type AcumulacionUpdateWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAcumulacionesNestedInput
    qr?: QrUpdateOneWithoutAcumulacionesNestedInput
  }

  export type AcumulacionUncheckedUpdateWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idQR?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionUncheckedUpdateManyWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idQR?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionUpdateWithoutPromocionInput = {
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoPromocionUncheckedUpdateWithoutPromocionInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoPromocionUncheckedUpdateManyWithoutPromocionInput = {
    idCliente?: StringFieldUpdateOperationsInput | string
    totalAcumulado?: IntFieldUpdateOperationsInput | number
    ultimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanjeCreateManyRecompensaInput = {
    id?: string
    idCliente: string
    codigo: string
    estado?: string | null
    fechaGeneracion?: Date | string
    fechaExpiracion?: Date | string | null
    fechaUso?: Date | string | null
  }

  export type CanjeUpdateWithoutRecompensaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutCanjesNestedInput
  }

  export type CanjeUncheckedUpdateWithoutRecompensaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CanjeUncheckedUpdateManyWithoutRecompensaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaExpiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaUso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcumulacionCreateManyQrInput = {
    id?: string
    idCliente: string
    idPromocion: string
    cantidad?: number
    fecha?: Date | string
  }

  export type AcumulacionUpdateWithoutQrInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAcumulacionesNestedInput
    promocion?: PromocionUpdateOneRequiredWithoutAcumulacionesNestedInput
  }

  export type AcumulacionUncheckedUpdateWithoutQrInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcumulacionUncheckedUpdateManyWithoutQrInput = {
    id?: StringFieldUpdateOperationsInput | string
    idCliente?: StringFieldUpdateOperationsInput | string
    idPromocion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}