CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "hashed_password" varchar,
  "foto_nombre" varchar,
  "foto_ruta" varchar,
  "us_idtelegram" varchar,
  "us_telefono" varchar,
  "telegram_username" varchar,
  "phone_whatsapp" varchar,
  "is_active" bool,
  "is_superuser" bool,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp,
  "created_by" integer,
  "id_proceso" integer
);

CREATE TABLE "user_session" (
  "id" integer PRIMARY KEY,
  "user_id" integer NOT NULL,
  "refresh_token" varchar,
  "expires_at" timestamp,
  "created_at" timestamp
);

CREATE TABLE "companies" (
  "id" integer PRIMARY KEY,
  "code" varchar,
  "sector" varchar,
  "name" varchar,
  "rut" varchar,
  "address" varchar,
  "region" varchar,
  "province" varchar,
  "city" varchar,
  "phone" varchar,
  "email" varchar,
  "is_active" bool,
  "mongodb" varchar,
  "province_id" integer,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "company_config" (
  "id" integer PRIMARY KEY,
  "company_id" integer NOT NULL,
  "url" varchar,
  "color" varchar
);

CREATE TABLE "companies_users" (
  "id" integer PRIMARY KEY,
  "company_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "is_active" bool,
  "create_at" timestamp
);

CREATE TABLE "devices" (
  "id" integer PRIMARY KEY,
  "dev_eui" varchar UNIQUE,
  "name" varchar,
  "serial" varchar,
  "empresa_id" integer,
  "id_dispositivo_padre" integer,
  "tipo_dispositivo" varchar,
  "last_seen" datetime,
  "latitud_install" varchar,
  "longitud_install" varchar,
  "latitud_actual" varchar,
  "longitud_actual" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "gps_device" (
  "id" integer PRIMARY KEY,
  "bateria" varchar,
  "motion_estado" varchar,
  "motion_fuerza" varchar,
  "motion_tiempo" varchar,
  "geometria" geometry
);

CREATE TABLE "sub_estacion_device" (
  "id" integer PRIMARY KEY,
  "volt_linea" varchar,
  "corr_ma" varchar,
  "falla_tipo" varchar,
  "temp_amb" varchar
);

CREATE TABLE "gateway_device" (
  "id" integer PRIMARY KEY,
  "ip_wan" varchar,
  "location" varchar,
  "firmware_version" varchar
);

CREATE TABLE "lector_device" (
  "id" integer PRIMARY KEY,
  "umbral_bateria_critica" varchar,
  "modelo_bateria" varchar,
  "last_calibration" datetime
);

COMMENT ON COLUMN "devices"."dev_eui" IS 'Unique, indexado';

COMMENT ON COLUMN "devices"."tipo_dispositivo" IS 'Enum: Gateway, Gps, Lector, Subestacion';

COMMENT ON COLUMN "gps_device"."id" IS 'FK a devices.id';

COMMENT ON COLUMN "gps_device"."geometria" IS 'Spatial - last fixed position';

COMMENT ON COLUMN "sub_estacion_device"."id" IS 'FK a devices.id';

COMMENT ON COLUMN "gateway_device"."id" IS 'FK a devices.id';

COMMENT ON COLUMN "gateway_device"."location" IS 'Fixed instal text/location string';

COMMENT ON COLUMN "lector_device"."id" IS 'FK a devices.id';

ALTER TABLE "user_session" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "companies_users" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "companies_users" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "company_config" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "devices" ADD FOREIGN KEY ("empresa_id") REFERENCES "companies" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "devices" ADD FOREIGN KEY ("id_dispositivo_padre") REFERENCES "devices" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "gps_device" ADD FOREIGN KEY ("id") REFERENCES "devices" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "sub_estacion_device" ADD FOREIGN KEY ("id") REFERENCES "devices" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "gateway_device" ADD FOREIGN KEY ("id") REFERENCES "devices" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "lector_device" ADD FOREIGN KEY ("id") REFERENCES "devices" ("id") DEFERRABLE INITIALLY IMMEDIATE;
