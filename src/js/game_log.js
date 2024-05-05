let _log_table_body;

const rendering_log = (log) => {
  const { answer, strike, ball } = log;

  const index = _log_table_body.getElementsByTagName("tr").length + 1;
  const result = strike + ball === 0 ? "OUT" : `${strike}S ${ball}B`;

  const log_tr = document.createElement("tr");

  const index_td = document.createElement("td");
  index_td.textContent = index;
  index_td.className = "screen--game__logs--index";
  log_tr.appendChild(index_td);

  const answer_td = document.createElement("td");
  answer_td.textContent = answer.join("");
  answer_td.className = "screen--game__logs--answer";
  log_tr.appendChild(answer_td);

  const result_td = document.createElement("td");
  result_td.textContent = result;
  result_td.className = "screen--game__logs--result";
  log_tr.appendChild(result_td);

  _log_table_body.appendChild(log_tr);
};

const reset_game_log = () => {
  _log_table_body.innerHTML = "";
};

const init_game_log = (log_table) => {
  _log_table_body = log_table.getElementsByTagName("tbody")[0];
  reset_game_log();
};

export { init_game_log, reset_game_log, rendering_log };
