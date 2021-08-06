export const route = (props) => {
  const { id, name, module, createdAt, modifiedAt } = props.verification;

  return (
    <div>
      <h2>{name}</h2>
      <dl>
        <div>
          <dt>ID:</dt>
          <dd>{id}</dd>
        </div>

        <div>
          <dt>Module:</dt>
          <dd>{module}</dd>
        </div>

        <div>
          <dt>Created at:</dt>
          <dd>{createdAt}</dd>
        </div>

        <div>
          <dt>Modified At:</dt>
          <dd>{modifiedAt}</dd>
        </div>
      </dl>
    </div>
  );
};
