export function chunkSubstrBySegments(str, segments) {
  let sectionCharLenght = Math.ceil(str.length / segments)
  const chunks = new Array(segments)
  let j = 0;
  let h = 0; 
  for (let i = 0, o = 0; i < segments; i++, o += sectionCharLenght) {

    chunks[i] = str.substr(o-j, sectionCharLenght-j);
    chunks[i] = chunks[i].slice(h); 
    
    if (str[sectionCharLenght] && str[sectionCharLenght] !== ' ' ) {
      j = sectionCharLenght;
      while (str[j] !== ' ') {
        chunks[i] += str[j];
        j++;
        h++;
      }
      sectionCharLenght += j;
    } else {
      h = 0;
    }
  }

  return chunks
}