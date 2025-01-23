import { createBase, runPreset } from "create";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

export const base = createBase({
  options: {
    projectName: z.string(),
  },
  produce() {
    return {
      projectName: "example-app",
    };
  },
});

export const blockREADME = base.createBlock({
  produce({ options }) {
    return {
      files: {
        "README.md": `# ${options.projectName}`,
      },
    };
  },
});

export const promptPreset = base.createPreset({
  about: {
    name: "PromptPreset",
  },
  blocks: [blockREADME],
});

export const testTemplate = base.createTemplate({
  about: {
    name: "Example-App",
  },
  suggested: promptPreset,
  presets: [promptPreset],
});

export default testTemplate;

// await runPreset(promptPreset, {
//   options: {
//     projectName: "Test App",
//   },
//   offline: true,
// });
