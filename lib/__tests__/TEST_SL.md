O comportamento padrão não deve validar se as URLs responde ok ou não, somente
deve identificar o arquivo markdown (a partir da rota que recebeu como
argumento), analisar o arquivo Markdown e imprimir os links que vão sendo
encontrados, junto com a rota do arquivo onde aparece e o texto que tem dentro
do link (truncado 50 caracteres).