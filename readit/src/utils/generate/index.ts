const readme = ({
  qa,
  futureImprovements,
}: {
  qa: Array<{ question: string; answer: string }>;
  futureImprovements: Array<string>;
}) => {
  const readme = `# ${qa[0].question} 
${qa[0].answer}

# ${qa[1].question}
${qa[1].answer}

# Future Improvements

${futureImprovements.map(element => `- [ ] ` + element).join('\n')}`;

  return readme;
};

export default {
  readme,
};
