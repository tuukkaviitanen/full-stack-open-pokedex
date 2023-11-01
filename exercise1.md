I'm looking into the C#/.NET ecosystem in this exercise. C# is a strongly typed language and the compiler throws an error about many of the things that JS needs a separate linter for. Visual Studio (2022) also warns about many possible errors (for example null reference exceptions). Still, if there is a need for further linting rules (for example formatting rules), .editorconfig can be used for this and visual studio checks. This is built into Visual Studio 2022 and can be installed as an extension to VSCode.

For testing, there are multiple popular testing frameworks: xUnit, NUnit and MSTest are all recommended by Microsoft. These tests are added as a separate project to your solution and Visual Studio 2022 supports them.

Building a C#/.NET project is done by using Visual Studio (2022) or the .NET CLI.

For CI, Azure pipelines is also a Microsoft product so it should heavily support any modern .NET projects. It also allows other source control systems than Github and is said to be more versatile. It should either way be a good option to .NET projects.

As Azure is Microsoft's cloud service, this setup would surely be in the cloud. Using cloud might be cheaper and simpler in a smaller project like this. Microsoft usually has great graphical user interfaces for it's products which might make the configuration and maintenance smoother. Deeper research into Azure services as a whole are needed to make a safer decision.
