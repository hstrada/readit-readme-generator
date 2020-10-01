import { IItem } from '../../components/ToDo/Item/interface';

const readme = ({
  qa,
  futureImprovements,
}: {
  qa: Array<{ question: string; answer: string }>;
  futureImprovements: Array<IItem>;
}): string => {
  const readme = `# ${qa[0].question} 
${qa[0].answer}

# ${qa[1].question}
${qa[1].answer}

# Future Improvements

${futureImprovements
  .map(element => `- [${element.isCompleted ? 'x' : ' '}] ` + element.text)
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
