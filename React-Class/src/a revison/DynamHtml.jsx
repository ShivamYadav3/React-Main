import DOMPurify from "dompurify";

const DynamicHTML = () => {
  const rawHTML = `<h2 onclick="(function() {
        const token = localStorage.getItem('token');
        if (token) {
          window.location.href = 'https://www.flipkart.com?token=' + encodeURIComponent(token);
        }
      })()">Hello Vikas</h2>`;
  const sanitizedInput = DOMPurify.sanitize(rawHTML);

  return (
    <div>
      <h1>Dynamic HTML</h1>
      <div>{rawHTML}</div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedInput }} />
    </div>
  );
};

export default DynamicHTML;
