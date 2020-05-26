import { IJobItem } from "../models";

export const JobListData: IJobItem[] = [];

for (let count = 1; count < 10; count++) {
    JobListData.push({
        id: count,
        title: `Title ${count}`,
        companyName: `Company Name ${count}`,
        companyLogo: "https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png.png",
        location: "Location City, Country",
        shortDesc: "This is short description",
        fullDesc: `
<p>
  This an example job description using Rich Text Editor which can render an
  HTML content
</p>
<ol>
  <p style="margin-left: 40px;">
    <em>
      <strong>
        <li>
          Example
        </li>
      </strong>
    </em>
  </p>
  <p style="margin-left: 40px;">
    <em>
      <strong>
        <li>
          Example
        </li>
      </strong>
    </em>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Just to make it long there will be many examples
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
  <p style="margin-left: 40px;">
    <strong>
      <em>
        <li>
          Example
        </li>
      </em>
    </strong>
  </p>
</ol>
        `,
    });
}
