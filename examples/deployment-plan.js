var graphConfig = new GitGraph.Template({
    colors: [ "#dfe3e6", "#3d70b2", "#ff5050", "#008571" ],
    branch: {
        color: "#000000",
        lineWidth: 3,
        spacingX: 30,
        mergeStyle: "straight",
        showLabel: false,                // display branch names on graph
        labelFont: "normal 10pt Arial"
    },
    commit: {
        spacingY: -30,
        dot: {
            size: 8,
            strokeColor: "#000000",
            strokeWidth: 4
        },
        tag: {
            font: "normal 10pt Arial",
            color: "yellow"
        },
        message: {
            color: "black",
            font: "normal 12pt Arial",
            displayAuthor: false,
            displayBranch: false,
            displayHash: false,
        }
    },
    arrow: {
        active: false
    }
});

var drawGraph1 = function() {
    var config = {
    elementId: "gitGraph",
    template: graphConfig,
    mode: "extended",
    orientation: "vertical"
    };

    var gitgraph = new GitGraph(config);

    var b1 = gitgraph.branch("1");
    b1.commit("Task 1");
    var b2 = b1.branch("2"); // New branch from HEAD
    b1.commit("Task 2");
    b2.commit("Task 3");
    var b3 = b2.branch("3"); // New branch from develop
    b1.commit("Task 4");
    b2.commit("Task 5");
    b3.commit("Task 6");
    b3.merge(b2, { message: " ", color: "white", size: 1 });
    b1.commit("Task 7");
    b2.commit("Task 8");
    b2.merge(b1, { message: " ", color: "white", size: 1 });
    b1.commit("Task 9");
}

var drawGraph2 = function() {
    var config = {
    elementId: "gitGraph2",
    template: graphConfig,
    mode: "extended",
    orientation: "vertical"
    };

    var gitgraph = new GitGraph(config);

    var b1 = gitgraph.branch("1");
    b1.commit("Task 1");
    var b2 = b1.branch("2"); // New branch from HEAD
    var b3 = b1.branch("3"); // New branch from HEAD
    var b4 = b1.branch("4"); // New branch from HEAD
    b1.commit("Task 2");
    b2.commit("Task 3");
    b3.commit("Task 4");
    b4.commit("Task 5");
    b2.merge(b1, { message: " ", color: "white", size: 1 })
    b3.merge(b1, { message: " ", color: "white", size: 1 })
    b4.merge(b1, { message: " ", color: "white", size: 1 })
    b1.commit("Task 6");
}

drawGraph1();
drawGraph2();