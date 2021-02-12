# Engineering Processes

> A series of steps engineers use to help them solve problems.

## Main Engineering Process

We perform engineering in a documentation- and test-driven way.

This means that we always write documentation first,
at least a single test and then enter the classic test-driven cycle of

1. Write failing test.
2. Implement as much as required to make the test green.
3. Repeat, adapt and complete documentation along with any changes.

## Smart Contract Development Process

1. Follow the [main engineering process](#main-engineering-process) to develope the smart contract

2. Deploy the contract(s) on a testnet and test all of it's functionalities while documenting the example transactions with a link to etherscan and a list of used parameters per transaction

3. Request at least 3 audits (From either our [auditor network](/engrineering/auditors) or [gitcoin](https://gitcoin.co/)) sequentially (not in parallel), after each implement changes to address findings of each audit, start next audit after you and the auditor are happy with how you implemented the improvements

4. Deploy to mainnet

5. Test on mainnet

## Security Audits

- Build with professional tools to start with (HardHat, Waffle)
- Document code inline. Which helps performing the audits, as auditors immediately see what was intended and what has been implemented
- Write test cases with the above mentioned tools, which also gonna ensure functionality and security while the code is progressing/changing
- Write comprehensible documentation of how to use the contracts and how they are supposed to work, you are gonna need them for integration documentation anyway and it’s gonna safe a lot of time with auditors
- Don’t even start with audits if the above is not finished, you’ll waste time and money
- You pay big auditing firms mainly for their name, not for the quality of their work (https://www.financemagnates.com/cryptocurrency/news/defi-protocol-akropolis-lost-2-million-to-hackers/)
- No shame to use gitcoin for finding and contracting auditors (you get good auditors for simple contracts already for 300-500 DAI)
- Perform a round of 2-3 audits, sequentially, Audit -> Improve -> Review -> Audit -> Improve -> Review-> Audit
- Have the original auditors review the improvements (so that you don’t introduce new problems)
- Build a network of auditors over time, it’s gonna make you safe time every single time you need an additional audit
- But always throw in at least a new pair of eyes (tunnel vision)
- Run a bounty program right after the contracted audits

Learn a lot of modern security audit best practices from OpenZepplin's pre-mortems: http://blog.openzeppelin.com/

Also see: https://our.status.im/what-is-a-security-audit-when-you-should-get-one-and-how-to-prepare/

Read more: https://secureum.substack.com/p/smart-contract-security-resources
