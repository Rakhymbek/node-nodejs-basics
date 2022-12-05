const parseEnv = () => {
  const RSS_ENVS = [];
  Object.keys(process.env).forEach((envKey) => {
    if (envKey.includes("RSS_")) {
      RSS_ENVS.push(`${envKey}=${process.env[envKey]}`);
    }
  });
  console.log(RSS_ENVS.join('; '));
};

parseEnv();
