// @ts-check

const {exec} = require('child_process');
const {readFileSync, writeFileSync} = require('fs');
const {exit} = process;

const pathCommitMsg = process.cwd() + '/.git/COMMIT_EDITMSG';

exec("git branch | grep '*'", function (err, output) {
    if (err) {
        exit(0);
    }

    const originalCommitMsg = readFileSync(pathCommitMsg);
    const branchName = output.replace('* ', '').replace('\n', '');
    const [taskNumber] = /(LS-\d+)/.exec(branchName) || [''];
    const [, taskNumberInPreviousMessage] = /^\[(LS-\d+)\]/.exec(originalCommitMsg.toString()) || ['', ''];

    let taskNumberString = '';

    if (taskNumberInPreviousMessage !== taskNumber) {
        taskNumberString = taskNumber ? `[${taskNumber}] ` : '';
    }

    if (branchName === '(no branch)') {
        exit(0);
    }

    const commitMsg = `${taskNumberString}${originalCommitMsg}`;

    writeFileSync(pathCommitMsg, commitMsg);
    exit(0);
});
