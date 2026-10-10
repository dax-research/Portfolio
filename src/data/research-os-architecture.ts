export type ArchitectureStatus = "implemented" | "partial" | "planned";

export type ArchitectureNode = {
  id: string;
  title: string;
  lane: "documents" | "query";
  status: ArchitectureStatus;
  purpose: string;
  input: string;
  output: string;
  source: {
    label: string;
    href: string;
  };
};

export type ArchitectureEdge = {
  id: string;
  from: ArchitectureNode["id"];
  to: ArchitectureNode["id"];
  status: ArchitectureStatus;
  desktopPath: string;
  mobilePath: string;
};

const repository = "https://github.com/dax-research/research-os";

export const researchOsArchitectureNodes: ArchitectureNode[] = [
  {
    id: "pdf-input",
    title: "PDF file input",
    lane: "documents",
    status: "partial",
    purpose:
      "The example script passes a local PDF path to the reader. There is no browser upload interface in the inspected source.",
    input: "A PDF path supplied by the example script.",
    output: "A PDF file passed to the reader.",
    source: {
      label: "Example script",
      href: `${repository}/blob/main/main.py`,
    },
  },
  {
    id: "pdf-reader",
    title: "PDF text extraction",
    lane: "documents",
    status: "implemented",
    purpose:
      "Reads the PDF and collects extracted text for non-empty pages, together with page and filename metadata.",
    input: "A PDF file path.",
    output: "Filename, page count, and page-numbered text.",
    source: {
      label: "PDF reader",
      href: `${repository}/blob/main/src/pdf_reader.py`,
    },
  },
  {
    id: "chunker",
    title: "Page-aware chunking",
    lane: "documents",
    status: "implemented",
    purpose:
      "Splits page text into word-based chunks and retains page numbers and sequential chunk IDs; optional overlap is supported.",
    input: "Extracted page text.",
    output: "Text chunks with page and chunk metadata.",
    source: {
      label: "Chunker and tests",
      href: `${repository}/blob/main/src/chunker.py`,
    },
  },
  {
    id: "embeddings",
    title: "Embeddings",
    lane: "documents",
    status: "planned",
    purpose:
      "A roadmap stage for representing document chunks as vectors. The inspected repository source does not contain an embedding implementation.",
    input: "Chunked document text.",
    output: "Not implemented in the inspected source.",
    source: {
      label: "Project roadmap",
      href: `${repository}/blob/main/README.md`,
    },
  },
  {
    id: "vector-store",
    title: "Vector database",
    lane: "documents",
    status: "planned",
    purpose:
      "A roadmap stage for storing vectors. No vector database or indexing code was present in the inspected source tree.",
    input: "Not implemented in the inspected source.",
    output: "Not implemented in the inspected source.",
    source: {
      label: "Project roadmap",
      href: `${repository}/blob/main/README.md`,
    },
  },
  {
    id: "query-input",
    title: "Research question",
    lane: "query",
    status: "planned",
    purpose:
      "A conceptual query entry for the future semantic-search flow. The repository does not currently expose a query interface.",
    input: "A question from a future user interface.",
    output: "Not implemented in the inspected source.",
    source: {
      label: "Project roadmap",
      href: `${repository}/blob/main/README.md`,
    },
  },
  {
    id: "semantic-search",
    title: "Semantic search",
    lane: "query",
    status: "planned",
    purpose:
      "A roadmap capability that would use a question and indexed document content to find relevant passages. Search and retrieval code was not present in the inspected source tree.",
    input: "A research question and, in a future system, indexed documents.",
    output: "Not implemented in the inspected source.",
    source: {
      label: "Project roadmap",
      href: `${repository}/blob/main/README.md`,
    },
  },
  {
    id: "rag",
    title: "RAG pipeline",
    lane: "query",
    status: "planned",
    purpose:
      "A roadmap item for retrieval-augmented generation. No response-generation pipeline was present in the inspected source tree.",
    input: "Not implemented in the inspected source.",
    output: "Not implemented in the inspected source.",
    source: {
      label: "Project roadmap",
      href: `${repository}/blob/main/README.md`,
    },
  },
];

export const researchOsArchitectureEdges: ArchitectureEdge[] = [
  {
    id: "input-to-reader",
    from: "pdf-input",
    to: "pdf-reader",
    status: "implemented",
    desktopPath: "M 190 112 C 211 112, 219 112, 240 112",
    mobilePath: "M 500 115 C 500 117, 500 120, 500 122",
  },
  {
    id: "reader-to-chunker",
    from: "pdf-reader",
    to: "chunker",
    status: "partial",
    desktopPath: "M 390 112 C 411 112, 419 112, 440 112",
    mobilePath: "M 500 233 C 500 235, 500 237, 500 239",
  },
  {
    id: "chunker-to-embeddings",
    from: "chunker",
    to: "embeddings",
    status: "planned",
    desktopPath: "M 590 112 C 611 112, 619 112, 640 112",
    mobilePath: "M 500 351 C 500 353, 500 355, 500 357",
  },
  {
    id: "embeddings-to-vector-store",
    from: "embeddings",
    to: "vector-store",
    status: "planned",
    desktopPath: "M 790 112 C 811 112, 819 112, 840 112",
    mobilePath: "M 500 469 C 500 471, 500 473, 500 475",
  },
  {
    id: "question-to-search",
    from: "query-input",
    to: "semantic-search",
    status: "planned",
    desktopPath: "M 190 342 C 251 342, 379 342, 440 342",
    mobilePath: "M 500 705 C 500 707, 500 709, 500 711",
  },
  {
    id: "vector-store-to-search",
    from: "vector-store",
    to: "semantic-search",
    status: "planned",
    desktopPath: "M 900 158 C 900 224, 722 230, 689 296",
    mobilePath: "M 950 531 C 970 531, 985 545, 985 565 L 985 733 C 985 752, 970 767, 950 767",
  },
  {
    id: "search-to-rag",
    from: "semantic-search",
    to: "rag",
    status: "planned",
    desktopPath: "M 590 342 C 651 342, 779 342, 840 342",
    mobilePath: "M 500 823 C 500 825, 500 827, 500 829",
  },
];

export const researchOsWalkthrough = researchOsArchitectureNodes.map(
  (node) => node.id,
);
