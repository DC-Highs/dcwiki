import * as jsEnv from "browser-or-node"

type ReadFileOptions = {
    filePath: string
    encoding?: BufferEncoding
}

type WriteFileOptions = {
    filePath: string
    content: string
    encoding?: BufferEncoding
}

type WriteJsonOptions<T> = {
    filePath: string
    data: T
    indent?: number
    encoding?: BufferEncoding
}

async function readFile({ filePath, encoding = "utf-8" }: ReadFileOptions): Promise<string> {
    if (jsEnv.isNode) {
        const fs = await import("fs")
        const content = await fs.promises.readFile(filePath, { encoding: encoding })
        return content
    }

    throw new Error("Unsupported environment")
}

async function writeFile({ filePath, content, encoding = "utf-8" }: WriteFileOptions): Promise<void> {
    if (jsEnv.isNode) {
        const fs = await import("fs")
        
        await fs.promises.writeFile(
            filePath,
            content,
            { encoding: encoding }
        )
    } else if (jsEnv.isBrowser) {
        const { saveTextFile } = await import("client-helper")
        await saveTextFile({ fileName: filePath, content, mediaType: "text/plain" })
    } else {
        throw new Error("Unsupported environment")
    }
}

async function readCompressedFile({ filePath, encoding = "utf-8" }: ReadFileOptions): Promise<string> {
    if (jsEnv.isNode) {
        const zlib = await import("zlib")
        const fs = await import("fs")
        const buffer = await fs.promises.readFile(filePath)
        return zlib.gunzipSync(buffer).toString(encoding)
    }

    throw new Error("Unsupported environment for compressed file reading")
}

async function writeCompressedFile({ filePath, content, encoding = "utf-8" }: WriteFileOptions): Promise<void> {
    if (jsEnv.isNode) {
        const zlib = await import("zlib")
        const fs = await import("fs")
        const compressedContent = zlib.gzipSync(Buffer.from(content, encoding))
        await fs.promises.writeFile(filePath, compressedContent)
    }

    throw new Error("Unsupported environment for compressed file writing")
}

async function readJsonFile<T>({ filePath, encoding = "utf-8" }: ReadFileOptions): Promise<T> {
    const content = await readFile({ filePath, encoding })
    return JSON.parse(content)
}

async function writeJsonFile<T>({ filePath, data, indent, encoding = "utf-8" }: WriteJsonOptions<T>): Promise<void> {
    const content = JSON.stringify(data, null, indent)
    await writeFile({ filePath, content, encoding })
}

async function readCompressedJsonFile<T>({ filePath, encoding = "utf-8" }: ReadFileOptions): Promise<T> {
    const content = await readCompressedFile({ filePath, encoding })
    return JSON.parse(content)
}

async function writeCompressedJsonFile<T>({ filePath, data, indent, encoding = "utf-8" }: WriteJsonOptions<T>): Promise<void> {
    const content = JSON.stringify(data, null, indent)
    await writeCompressedFile({ filePath, content, encoding })
}

export {
    readFile,
    writeFile,
    readCompressedFile,
    writeCompressedFile,
    readJsonFile,
    writeJsonFile,
    readCompressedJsonFile,
    writeCompressedJsonFile
}
