export const route = (props) => {
  const { id, name, module, createdAt, modifiedAt } = props.verification;

  return (
    <div>
      <h2>{name}</h2>
      <dl>
        <dt>ID:</dt>
        <dd>{id}</dd>

        <dt>Module:</dt>
        <dd>{module}</dd>

        <dt>Created at:</dt>
        <dd>{createdAt}</dd>

        <dt>Modified At:</dt>
        <dd>{modifiedAt}</dd>
      </dl>
    </div>
  );
};
