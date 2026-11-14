"use strict";

(() => {
  const TEAM_PAGE = "team.html";

  function getTeamId(card) {
    const trigger = card.querySelector("[data-open-team]");
    return trigger?.dataset.openTeam || card.dataset.teamId || "";
  }

  function openTeam(teamId) {
    if (!teamId) return;

    const exists = Array.isArray(window.TEAMS) && window.TEAMS.some((team) => team.id === teamId);

    if (!exists) return;

    window.location.href = `${TEAM_PAGE}?team=${encodeURIComponent(teamId)}`;
  }

  document.addEventListener(
    "click",
    (event) => {
      const card = event.target.closest(".team-card");
      if (!card) return;

      // السماح بفتح الروابط الخارجية إن وُجدت داخل الكارت.
      if (event.target.closest("a[href^='http']")) return;

      const teamId = getTeamId(card);
      if (!teamId) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      openTeam(teamId);
    },
    true,
  );

  document.addEventListener("keydown", (event) => {
    const card = event.target.closest(".team-card");
    if (!card) return;

    if (event.key !== "Enter" && event.key !== " ") return;

    // لا نتدخل لو المستخدم واقف على زر أو رابط داخلي.
    if (event.target.closest("button, a, input")) return;

    const teamId = getTeamId(card);
    if (!teamId) return;

    event.preventDefault();
    openTeam(teamId);
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".team-card").forEach((card) => {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "link");
      card.setAttribute("aria-label", "Open team details");
    });
  });
})();
