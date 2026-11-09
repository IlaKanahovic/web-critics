'use server'

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/s3";
import { checkAdmin } from "@/lib/utils/checkAdmin";

export async function uploadFileToS3(formData: FormData) {
    await checkAdmin();

    const file = formData.get('file') as File;
    if (!file) throw new Error("Файл не передан");

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split('.').pop() || 'webp';
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;

    const command = new PutObjectCommand({
        Bucket: "webcritic",
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
    });

    await s3Client.send(command);

    return `https://storage.yandexcloud.net/webcritic/${fileName}`;
}