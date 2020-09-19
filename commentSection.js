const likeSec = document.querySelector('.request-like-comment-section');

const pathArr = [
    "M17.51 11l-2.15-3a14.81 14.81 0 01-2.25-5.29L12.74 1H10.5A2.5 2.5 0 008 3.5v.58a9 9 0 00.32 2.39L9 9H4.66A2.61 2.61 0 002 11.4a2.48 2.48 0 00.39 1.43 2.48 2.48 0 00.69 3.39 2.46 2.46 0 001.45 2.92 2.47 2.47 0 000 .36A2.5 2.5 0 007 22h4.52a8 8 0 001.94-.24l3-.76H21V11h-3.49zM19 19h-2.12l-3.41.82A6 6 0 0112 20H7a.9.9 0 01-.9-.89v-.14l.15-1-1-.4a.9.9 0 01-.55-.83.93.93 0 010-.22l.3-.95-.73-.57a.9.9 0 01-.39-.74.88.88 0 01.12-.44l.46-.72-.46-.72a.88.88 0 01-.14-.51 1 1 0 011-.87h6.64l-1.3-4.7a9 9 0 01-.33-2.37v-.55a.5.5 0 01.5-.5h.95a17.82 17.82 0 002.52 6.22L16.6 13H19v6z",
    "M18 10H6V9h12v1zm4-5v17l-5-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1zm-2 1H4v10h13.7l2.3 1.84V6zm-4 6H8v1h8v-1z",
    "M24 12a1.18 1.18 0 00-.36-.84L14 2v6h-3A10 10 0 001 18v4h1.87A6.11 6.11 0 019 16h5v6l9.63-9.14A1.18 1.18 0 0024 12zm-8 5.54V14H9a8.15 8.15 0 00-6 2.84A8 8 0 0111 10h5V6.48L21.81 12z",
    "M19.27 4.73l-4.91 12.9-2.18-5.81-5.81-2.18 12.9-4.91m2-2.73a1 1 0 00-.28 0L1 9.65l9.71 3.64L14.35 23 22 3.05A.78.78 0 0021.23 2z"
];

const classArr = ["request-thumbs-style", "request-msg-style", "request-share-style", "request-send-style"];

const textArray = ["Like", "Comment", "Share", "Send"];

for (let i = 0; i < pathArr.length; i++) {
    const newElement = document.createElement('div');
    newElement.className = `${classArr[i]} request-comments-msg-style`;

    newElement.innerHTML = `
        <svg width="24" height="24">
            <path class="comment-icon" d="${pathArr[i]}"></path>
        </svg>

        <div class="request-${textArray[i]}-text-style req-txt-style">
            ${textArray[i]}
        </div>
    `;

    likeSec.append(newElement);
}

console.log("Hi")