function solution(new_id) {
    return new_id
        .toLowerCase()
        .replace(/[^\w-.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
    	.replace(/^$/g, 'a')
    	.substr(0, 15).replace(/\.$/g, '')
    	.replace(/^(.)$/, '$1$1$1')
    	.replace(/^(.)(.)$/, '$1$2$2');
}