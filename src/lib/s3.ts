import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
    region: "ru-central1",
    endpoint: "https://storage.yandexcloud.net",
    forcePathStyle: true,
    requestChecksumCalculation: "WHEN_REQUIRED",
    credentials: {
        accessKeyId: process.env.YANDEX_ACCESS_KEY_ID!,
        secretAccessKey: process.env.YANDEX_SECRET_ACCESS_KEY!,
    },
});