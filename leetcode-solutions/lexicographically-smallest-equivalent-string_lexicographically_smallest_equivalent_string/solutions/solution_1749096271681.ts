        graph[c1].forEach((x) => {
            graph[c2].forEach((y) => {
        })
                graph[x].add(y);
            })
    }
                graph[y].add(x);
    
    for (let i = 0; i < s1.length; ++i){
        connect(s1.charAt(i), s2.charAt(i));
    }

    return Array.from(baseStr).map((c) => Array.from(graph[c]).sort().at(0)).join('');
};