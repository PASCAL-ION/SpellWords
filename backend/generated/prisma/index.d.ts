
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GeneralStats
 * 
 */
export type GeneralStats = $Result.DefaultSelection<Prisma.$GeneralStatsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GeneralStats
 * const generalStats = await prisma.generalStats.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GeneralStats
   * const generalStats = await prisma.generalStats.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.generalStats`: Exposes CRUD operations for the **GeneralStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneralStats
    * const generalStats = await prisma.generalStats.findMany()
    * ```
    */
  get generalStats(): Prisma.GeneralStatsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    GeneralStats: 'GeneralStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "generalStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GeneralStats: {
        payload: Prisma.$GeneralStatsPayload<ExtArgs>
        fields: Prisma.GeneralStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>
          }
          findFirst: {
            args: Prisma.GeneralStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>
          }
          findMany: {
            args: Prisma.GeneralStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>[]
          }
          create: {
            args: Prisma.GeneralStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>
          }
          createMany: {
            args: Prisma.GeneralStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneralStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>[]
          }
          delete: {
            args: Prisma.GeneralStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>
          }
          update: {
            args: Prisma.GeneralStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>
          }
          deleteMany: {
            args: Prisma.GeneralStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneralStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>[]
          }
          upsert: {
            args: Prisma.GeneralStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralStatsPayload>
          }
          aggregate: {
            args: Prisma.GeneralStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneralStats>
          }
          groupBy: {
            args: Prisma.GeneralStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneralStatsCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralStatsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    generalStats?: GeneralStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model GeneralStats
   */

  export type AggregateGeneralStats = {
    _count: GeneralStatsCountAggregateOutputType | null
    _avg: GeneralStatsAvgAggregateOutputType | null
    _sum: GeneralStatsSumAggregateOutputType | null
    _min: GeneralStatsMinAggregateOutputType | null
    _max: GeneralStatsMaxAggregateOutputType | null
  }

  export type GeneralStatsAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneralStatsSumAggregateOutputType = {
    id: number | null
  }

  export type GeneralStatsMinAggregateOutputType = {
    id: number | null
    player1: string | null
    player2: string | null
    date: Date | null
    winner: string | null
  }

  export type GeneralStatsMaxAggregateOutputType = {
    id: number | null
    player1: string | null
    player2: string | null
    date: Date | null
    winner: string | null
  }

  export type GeneralStatsCountAggregateOutputType = {
    id: number
    player1: number
    player2: number
    date: number
    winner: number
    _all: number
  }


  export type GeneralStatsAvgAggregateInputType = {
    id?: true
  }

  export type GeneralStatsSumAggregateInputType = {
    id?: true
  }

  export type GeneralStatsMinAggregateInputType = {
    id?: true
    player1?: true
    player2?: true
    date?: true
    winner?: true
  }

  export type GeneralStatsMaxAggregateInputType = {
    id?: true
    player1?: true
    player2?: true
    date?: true
    winner?: true
  }

  export type GeneralStatsCountAggregateInputType = {
    id?: true
    player1?: true
    player2?: true
    date?: true
    winner?: true
    _all?: true
  }

  export type GeneralStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralStats to aggregate.
     */
    where?: GeneralStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralStats to fetch.
     */
    orderBy?: GeneralStatsOrderByWithRelationInput | GeneralStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneralStats
    **/
    _count?: true | GeneralStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneralStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneralStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralStatsMaxAggregateInputType
  }

  export type GetGeneralStatsAggregateType<T extends GeneralStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneralStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneralStats[P]>
      : GetScalarType<T[P], AggregateGeneralStats[P]>
  }




  export type GeneralStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralStatsWhereInput
    orderBy?: GeneralStatsOrderByWithAggregationInput | GeneralStatsOrderByWithAggregationInput[]
    by: GeneralStatsScalarFieldEnum[] | GeneralStatsScalarFieldEnum
    having?: GeneralStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralStatsCountAggregateInputType | true
    _avg?: GeneralStatsAvgAggregateInputType
    _sum?: GeneralStatsSumAggregateInputType
    _min?: GeneralStatsMinAggregateInputType
    _max?: GeneralStatsMaxAggregateInputType
  }

  export type GeneralStatsGroupByOutputType = {
    id: number
    player1: string
    player2: string
    date: Date
    winner: string
    _count: GeneralStatsCountAggregateOutputType | null
    _avg: GeneralStatsAvgAggregateOutputType | null
    _sum: GeneralStatsSumAggregateOutputType | null
    _min: GeneralStatsMinAggregateOutputType | null
    _max: GeneralStatsMaxAggregateOutputType | null
  }

  type GetGeneralStatsGroupByPayload<T extends GeneralStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralStatsGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralStatsGroupByOutputType[P]>
        }
      >
    >


  export type GeneralStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1?: boolean
    player2?: boolean
    date?: boolean
    winner?: boolean
  }, ExtArgs["result"]["generalStats"]>

  export type GeneralStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1?: boolean
    player2?: boolean
    date?: boolean
    winner?: boolean
  }, ExtArgs["result"]["generalStats"]>

  export type GeneralStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1?: boolean
    player2?: boolean
    date?: boolean
    winner?: boolean
  }, ExtArgs["result"]["generalStats"]>

  export type GeneralStatsSelectScalar = {
    id?: boolean
    player1?: boolean
    player2?: boolean
    date?: boolean
    winner?: boolean
  }

  export type GeneralStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1" | "player2" | "date" | "winner", ExtArgs["result"]["generalStats"]>

  export type $GeneralStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneralStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player1: string
      player2: string
      date: Date
      winner: string
    }, ExtArgs["result"]["generalStats"]>
    composites: {}
  }

  type GeneralStatsGetPayload<S extends boolean | null | undefined | GeneralStatsDefaultArgs> = $Result.GetResult<Prisma.$GeneralStatsPayload, S>

  type GeneralStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneralStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneralStatsCountAggregateInputType | true
    }

  export interface GeneralStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneralStats'], meta: { name: 'GeneralStats' } }
    /**
     * Find zero or one GeneralStats that matches the filter.
     * @param {GeneralStatsFindUniqueArgs} args - Arguments to find a GeneralStats
     * @example
     * // Get one GeneralStats
     * const generalStats = await prisma.generalStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralStatsFindUniqueArgs>(args: SelectSubset<T, GeneralStatsFindUniqueArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneralStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneralStatsFindUniqueOrThrowArgs} args - Arguments to find a GeneralStats
     * @example
     * // Get one GeneralStats
     * const generalStats = await prisma.generalStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsFindFirstArgs} args - Arguments to find a GeneralStats
     * @example
     * // Get one GeneralStats
     * const generalStats = await prisma.generalStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralStatsFindFirstArgs>(args?: SelectSubset<T, GeneralStatsFindFirstArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsFindFirstOrThrowArgs} args - Arguments to find a GeneralStats
     * @example
     * // Get one GeneralStats
     * const generalStats = await prisma.generalStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneralStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneralStats
     * const generalStats = await prisma.generalStats.findMany()
     * 
     * // Get first 10 GeneralStats
     * const generalStats = await prisma.generalStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalStatsWithIdOnly = await prisma.generalStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneralStatsFindManyArgs>(args?: SelectSubset<T, GeneralStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneralStats.
     * @param {GeneralStatsCreateArgs} args - Arguments to create a GeneralStats.
     * @example
     * // Create one GeneralStats
     * const GeneralStats = await prisma.generalStats.create({
     *   data: {
     *     // ... data to create a GeneralStats
     *   }
     * })
     * 
     */
    create<T extends GeneralStatsCreateArgs>(args: SelectSubset<T, GeneralStatsCreateArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneralStats.
     * @param {GeneralStatsCreateManyArgs} args - Arguments to create many GeneralStats.
     * @example
     * // Create many GeneralStats
     * const generalStats = await prisma.generalStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralStatsCreateManyArgs>(args?: SelectSubset<T, GeneralStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneralStats and returns the data saved in the database.
     * @param {GeneralStatsCreateManyAndReturnArgs} args - Arguments to create many GeneralStats.
     * @example
     * // Create many GeneralStats
     * const generalStats = await prisma.generalStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneralStats and only return the `id`
     * const generalStatsWithIdOnly = await prisma.generalStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneralStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneralStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneralStats.
     * @param {GeneralStatsDeleteArgs} args - Arguments to delete one GeneralStats.
     * @example
     * // Delete one GeneralStats
     * const GeneralStats = await prisma.generalStats.delete({
     *   where: {
     *     // ... filter to delete one GeneralStats
     *   }
     * })
     * 
     */
    delete<T extends GeneralStatsDeleteArgs>(args: SelectSubset<T, GeneralStatsDeleteArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneralStats.
     * @param {GeneralStatsUpdateArgs} args - Arguments to update one GeneralStats.
     * @example
     * // Update one GeneralStats
     * const generalStats = await prisma.generalStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralStatsUpdateArgs>(args: SelectSubset<T, GeneralStatsUpdateArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneralStats.
     * @param {GeneralStatsDeleteManyArgs} args - Arguments to filter GeneralStats to delete.
     * @example
     * // Delete a few GeneralStats
     * const { count } = await prisma.generalStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralStatsDeleteManyArgs>(args?: SelectSubset<T, GeneralStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneralStats
     * const generalStats = await prisma.generalStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralStatsUpdateManyArgs>(args: SelectSubset<T, GeneralStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralStats and returns the data updated in the database.
     * @param {GeneralStatsUpdateManyAndReturnArgs} args - Arguments to update many GeneralStats.
     * @example
     * // Update many GeneralStats
     * const generalStats = await prisma.generalStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneralStats and only return the `id`
     * const generalStatsWithIdOnly = await prisma.generalStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneralStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneralStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneralStats.
     * @param {GeneralStatsUpsertArgs} args - Arguments to update or create a GeneralStats.
     * @example
     * // Update or create a GeneralStats
     * const generalStats = await prisma.generalStats.upsert({
     *   create: {
     *     // ... data to create a GeneralStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneralStats we want to update
     *   }
     * })
     */
    upsert<T extends GeneralStatsUpsertArgs>(args: SelectSubset<T, GeneralStatsUpsertArgs<ExtArgs>>): Prisma__GeneralStatsClient<$Result.GetResult<Prisma.$GeneralStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneralStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsCountArgs} args - Arguments to filter GeneralStats to count.
     * @example
     * // Count the number of GeneralStats
     * const count = await prisma.generalStats.count({
     *   where: {
     *     // ... the filter for the GeneralStats we want to count
     *   }
     * })
    **/
    count<T extends GeneralStatsCountArgs>(
      args?: Subset<T, GeneralStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneralStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneralStatsAggregateArgs>(args: Subset<T, GeneralStatsAggregateArgs>): Prisma.PrismaPromise<GetGeneralStatsAggregateType<T>>

    /**
     * Group by GeneralStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralStatsGroupByArgs} args - Group by arguments.
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
      T extends GeneralStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralStatsGroupByArgs['orderBy'] }
        : { orderBy?: GeneralStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneralStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneralStats model
   */
  readonly fields: GeneralStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneralStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GeneralStats model
   */
  interface GeneralStatsFieldRefs {
    readonly id: FieldRef<"GeneralStats", 'Int'>
    readonly player1: FieldRef<"GeneralStats", 'String'>
    readonly player2: FieldRef<"GeneralStats", 'String'>
    readonly date: FieldRef<"GeneralStats", 'DateTime'>
    readonly winner: FieldRef<"GeneralStats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneralStats findUnique
   */
  export type GeneralStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * Filter, which GeneralStats to fetch.
     */
    where: GeneralStatsWhereUniqueInput
  }

  /**
   * GeneralStats findUniqueOrThrow
   */
  export type GeneralStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * Filter, which GeneralStats to fetch.
     */
    where: GeneralStatsWhereUniqueInput
  }

  /**
   * GeneralStats findFirst
   */
  export type GeneralStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * Filter, which GeneralStats to fetch.
     */
    where?: GeneralStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralStats to fetch.
     */
    orderBy?: GeneralStatsOrderByWithRelationInput | GeneralStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralStats.
     */
    cursor?: GeneralStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralStats.
     */
    distinct?: GeneralStatsScalarFieldEnum | GeneralStatsScalarFieldEnum[]
  }

  /**
   * GeneralStats findFirstOrThrow
   */
  export type GeneralStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * Filter, which GeneralStats to fetch.
     */
    where?: GeneralStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralStats to fetch.
     */
    orderBy?: GeneralStatsOrderByWithRelationInput | GeneralStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralStats.
     */
    cursor?: GeneralStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralStats.
     */
    distinct?: GeneralStatsScalarFieldEnum | GeneralStatsScalarFieldEnum[]
  }

  /**
   * GeneralStats findMany
   */
  export type GeneralStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * Filter, which GeneralStats to fetch.
     */
    where?: GeneralStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralStats to fetch.
     */
    orderBy?: GeneralStatsOrderByWithRelationInput | GeneralStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneralStats.
     */
    cursor?: GeneralStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralStats.
     */
    skip?: number
    distinct?: GeneralStatsScalarFieldEnum | GeneralStatsScalarFieldEnum[]
  }

  /**
   * GeneralStats create
   */
  export type GeneralStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a GeneralStats.
     */
    data: XOR<GeneralStatsCreateInput, GeneralStatsUncheckedCreateInput>
  }

  /**
   * GeneralStats createMany
   */
  export type GeneralStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneralStats.
     */
    data: GeneralStatsCreateManyInput | GeneralStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralStats createManyAndReturn
   */
  export type GeneralStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * The data used to create many GeneralStats.
     */
    data: GeneralStatsCreateManyInput | GeneralStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralStats update
   */
  export type GeneralStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a GeneralStats.
     */
    data: XOR<GeneralStatsUpdateInput, GeneralStatsUncheckedUpdateInput>
    /**
     * Choose, which GeneralStats to update.
     */
    where: GeneralStatsWhereUniqueInput
  }

  /**
   * GeneralStats updateMany
   */
  export type GeneralStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneralStats.
     */
    data: XOR<GeneralStatsUpdateManyMutationInput, GeneralStatsUncheckedUpdateManyInput>
    /**
     * Filter which GeneralStats to update
     */
    where?: GeneralStatsWhereInput
    /**
     * Limit how many GeneralStats to update.
     */
    limit?: number
  }

  /**
   * GeneralStats updateManyAndReturn
   */
  export type GeneralStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * The data used to update GeneralStats.
     */
    data: XOR<GeneralStatsUpdateManyMutationInput, GeneralStatsUncheckedUpdateManyInput>
    /**
     * Filter which GeneralStats to update
     */
    where?: GeneralStatsWhereInput
    /**
     * Limit how many GeneralStats to update.
     */
    limit?: number
  }

  /**
   * GeneralStats upsert
   */
  export type GeneralStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the GeneralStats to update in case it exists.
     */
    where: GeneralStatsWhereUniqueInput
    /**
     * In case the GeneralStats found by the `where` argument doesn't exist, create a new GeneralStats with this data.
     */
    create: XOR<GeneralStatsCreateInput, GeneralStatsUncheckedCreateInput>
    /**
     * In case the GeneralStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralStatsUpdateInput, GeneralStatsUncheckedUpdateInput>
  }

  /**
   * GeneralStats delete
   */
  export type GeneralStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
    /**
     * Filter which GeneralStats to delete.
     */
    where: GeneralStatsWhereUniqueInput
  }

  /**
   * GeneralStats deleteMany
   */
  export type GeneralStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralStats to delete
     */
    where?: GeneralStatsWhereInput
    /**
     * Limit how many GeneralStats to delete.
     */
    limit?: number
  }

  /**
   * GeneralStats without action
   */
  export type GeneralStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralStats
     */
    select?: GeneralStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralStats
     */
    omit?: GeneralStatsOmit<ExtArgs> | null
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


  export const GeneralStatsScalarFieldEnum: {
    id: 'id',
    player1: 'player1',
    player2: 'player2',
    date: 'date',
    winner: 'winner'
  };

  export type GeneralStatsScalarFieldEnum = (typeof GeneralStatsScalarFieldEnum)[keyof typeof GeneralStatsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type GeneralStatsWhereInput = {
    AND?: GeneralStatsWhereInput | GeneralStatsWhereInput[]
    OR?: GeneralStatsWhereInput[]
    NOT?: GeneralStatsWhereInput | GeneralStatsWhereInput[]
    id?: IntFilter<"GeneralStats"> | number
    player1?: StringFilter<"GeneralStats"> | string
    player2?: StringFilter<"GeneralStats"> | string
    date?: DateTimeFilter<"GeneralStats"> | Date | string
    winner?: StringFilter<"GeneralStats"> | string
  }

  export type GeneralStatsOrderByWithRelationInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    date?: SortOrder
    winner?: SortOrder
  }

  export type GeneralStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneralStatsWhereInput | GeneralStatsWhereInput[]
    OR?: GeneralStatsWhereInput[]
    NOT?: GeneralStatsWhereInput | GeneralStatsWhereInput[]
    player1?: StringFilter<"GeneralStats"> | string
    player2?: StringFilter<"GeneralStats"> | string
    date?: DateTimeFilter<"GeneralStats"> | Date | string
    winner?: StringFilter<"GeneralStats"> | string
  }, "id">

  export type GeneralStatsOrderByWithAggregationInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    date?: SortOrder
    winner?: SortOrder
    _count?: GeneralStatsCountOrderByAggregateInput
    _avg?: GeneralStatsAvgOrderByAggregateInput
    _max?: GeneralStatsMaxOrderByAggregateInput
    _min?: GeneralStatsMinOrderByAggregateInput
    _sum?: GeneralStatsSumOrderByAggregateInput
  }

  export type GeneralStatsScalarWhereWithAggregatesInput = {
    AND?: GeneralStatsScalarWhereWithAggregatesInput | GeneralStatsScalarWhereWithAggregatesInput[]
    OR?: GeneralStatsScalarWhereWithAggregatesInput[]
    NOT?: GeneralStatsScalarWhereWithAggregatesInput | GeneralStatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GeneralStats"> | number
    player1?: StringWithAggregatesFilter<"GeneralStats"> | string
    player2?: StringWithAggregatesFilter<"GeneralStats"> | string
    date?: DateTimeWithAggregatesFilter<"GeneralStats"> | Date | string
    winner?: StringWithAggregatesFilter<"GeneralStats"> | string
  }

  export type GeneralStatsCreateInput = {
    player1: string
    player2: string
    date?: Date | string
    winner: string
  }

  export type GeneralStatsUncheckedCreateInput = {
    id?: number
    player1: string
    player2: string
    date?: Date | string
    winner: string
  }

  export type GeneralStatsUpdateInput = {
    player1?: StringFieldUpdateOperationsInput | string
    player2?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: StringFieldUpdateOperationsInput | string
  }

  export type GeneralStatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1?: StringFieldUpdateOperationsInput | string
    player2?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: StringFieldUpdateOperationsInput | string
  }

  export type GeneralStatsCreateManyInput = {
    id?: number
    player1: string
    player2: string
    date?: Date | string
    winner: string
  }

  export type GeneralStatsUpdateManyMutationInput = {
    player1?: StringFieldUpdateOperationsInput | string
    player2?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: StringFieldUpdateOperationsInput | string
  }

  export type GeneralStatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1?: StringFieldUpdateOperationsInput | string
    player2?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: StringFieldUpdateOperationsInput | string
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

  export type GeneralStatsCountOrderByAggregateInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    date?: SortOrder
    winner?: SortOrder
  }

  export type GeneralStatsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneralStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    date?: SortOrder
    winner?: SortOrder
  }

  export type GeneralStatsMinOrderByAggregateInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    date?: SortOrder
    winner?: SortOrder
  }

  export type GeneralStatsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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