import { IItem } from '../../pages/Generator/interface';

const readme = ({
  qa,
  futureImprovements,
}: {
  qa: Array<{ question: string; answer: string }>;
  futureImprovements: Array<IItem>;
}): string => {
  const readme = `# :zap: ${qa[0].question} 
${qa[0].answer}

# :eyes: ${qa[1].question}
${qa[1].answer}

# :boom: Future Improvements

${futureImprovements
  .map(todo => `- [${todo.isCompleted ? 'x' : ' '}] ` + todo.text)
  .join('\n')}`;

  return readme;
};

const download = ({
  questions,
  futureImprovements,
}: {
  questions: Array<{ question: string; answer: string }>;
  futureImprovements: Array<IItem>;
}): void => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' +
      encodeURIComponent(
        readme({
          qa: questions,
          futureImprovements: futureImprovements,
        }),
      ),
  );
  element.setAttribute('download', 'README.md');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export default {
  readme,
  download,
};
