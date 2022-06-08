export function chunkSubstrBySegments(str, segments) {
    const numChunks = Math.ceil(str.length / segments)
    const chunks = new Array(segments)
  
    for (let i = 0, o = 0; i < segments; i++, o += numChunks) {
      chunks[i] = str.substr(o, numChunks)
    }
  
    return chunks
  }