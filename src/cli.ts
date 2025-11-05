import 'dotenv/config';
import { Command } from 'commander';
import { registerIndexDocsCommand } from 'src/presentation/console/commands/index-pdf-doc.command';

const program = new Command();

program
  .name('ai-project')
  .description('Internal CLI to project jobs.')
  .version('1.0.0');

registerIndexDocsCommand(program);

program.parseAsync(process.argv);
