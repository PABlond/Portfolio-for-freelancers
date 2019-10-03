exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /aframe/,
            use: loaders.null(),
          },
          {
            test: /3d-force-graph-vr/,
            use: loaders.null(),
          },
          {
            test: /three-forcegraph/,
            use: loaders.null(),
          },
          {
            test: /three-trackballcontrols/,
            use: loaders.null(),
          },
          {
            test: /three-render-objects/,
            use: loaders.null(),
          },
          {
            test: /3d-force-graph/,
            use: loaders.null(),
          },
          {
            test: /force-graph/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
